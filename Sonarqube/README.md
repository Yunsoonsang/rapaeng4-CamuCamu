# 소나 큐브 (SonarQube)에 대한 README

## JDK 17 설치하기

```bash
sudo apt install openjdk-17-jdk
java -version
# 환경변수 추가하기
PATH=$PATH:/usr/lib/jvm/java-17-openjdk-amd64/bin/
```
## 도커 컴포즈 배포 전에 사전 작업

1. `/etc/sysctl.conf` 파일 열기

    ```bash
    vi /etc/sysctl.conf
    ```

2. 맨 아래줄에 다음 내용 추가:

    ```
    vm.max_map_count=262144
    ```

3. 변경사항 적용하기:

    ```bash
    sudo sysctl -p
    ```

4. 볼륨 미리 생성하기

    ```bash
    docker volume create sonarqube_data
    docker volume create sonarqube_extensions
    docker volume create sonarqube_logs
    docker volume create postgresql
    docker volume create postgresql_data
    ```

5. **절대 소나큐브에 한글 플러그인 같은 추가 설정 설치 하지 말기! - 소나큐브 망가짐**

6. **소나 큐브의 초기 계정 정보 ⇒ admin / admin**

