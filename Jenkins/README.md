## **Continuous Integration (CI) Automation Pipeline**
```Groovy
pipeline {
    agent any
    environment {
        dockerImage = 'andrewyss/dev:test'
        containerName = 'test-app'
        buildPipeline = false
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'master',
                    credentialsId: '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',
                    url: 'https://github.com/Yunsoonsang/rapaeng4-CI.git'
            }
        }
        stage('SonarQube code analysis') {
            steps {
                withSonarQubeEnv('sonarQube-Server'){
                    sh "sonar-scanner \
                        -Dsonar.projectKey=dev-codeTest \
                        -Dsonar.sources=. \
                        -Dsonar.host.url=http://211.183.3.104:9000 \
                        -Dsonar.token=sqp_221d9394c656a853efe59707c0d0b0ed6f886150" 
                }
            }
            post {
                success {
                    script {
                        echo "SonarQube Analysis Succeeded!"
                        buildPipeline = true
                    }
                }
                failure {
                    script {
                        echo "SonarQube Analysis Failed!"
                        buildPipeline = false
                    }
                }
            }
        }
        stage('image build and push') {
            when {
                expression { buildPipeline == true }
            }
            steps{
                script {
                    // 이렇게 하면 none태그의 이미지가 로컬에 쌓이지 않는다.
                    sh "sudo docker pull $dockerImage || true"
                    sh "sudo docker build -t $dockerImage -f Dockerfile.dev ."
                    sh "sudo docker push $dockerImage"
                }
            }
        }
        stage('create container') {
            when {
                expression { buildPipeline == true }
            }
            steps{
                script {
                    // shell은 실패 되어도 상관없다. 그 다음 명령 그대로 실행
                    sh "sudo docker stop $containerName || true"
                    sh "sudo docker rm $containerName || true"
                    sh "sudo docker run -d -p 3000:3000 --restart always --name $containerName $dockerImage"
                }
            }
        }
        
    }
}
```
## **Prod build pipeline (not auto)**
```Groovy
pipeline {
    agent any
    environment {
        imageName = 'andrewyss/prod'
        initialTag = '1.0'
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'master',
                    credentialsId: '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',
                    url: 'https://github.com/Yunsoonsang/rapaeng4-CI.git'
            }
        }
        stage('image build and push') {
            steps {
                script {
                    // BUILD_NUMBER는 젠킨스에서 제공하는 환경변수로 동적으로 태그 번호를 업그레이드 할 수 있다.
                    def newTag = "${initialTag}.${BUILD_NUMBER}"
                    sh "sudo docker build -t ${imageName}:${newTag} -f Dockerfile.prod ."
                    sh "sudo docker push ${imageName}:${newTag}"
                    initialTag = newTag // 베이스 태그 번호를 업데이트 1.0 -> 1.1
                }
            }
        }
        
    }
}
```
### **Check [here](https://github.com/Yunsoonsang/rapaeng4-CI.git) for the GitHub information used in the pipeline.**