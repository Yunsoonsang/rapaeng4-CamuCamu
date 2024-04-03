import React from 'react'

export default function About() {

  const img2="./카무카무인프라.png"

  return (
    <div className='container mt-5 about-container'> 
    <div className='row'>
       
         <div className='col-md-6'>
             <h1 className='text-muted fe-bold'>쿠버네티스 자동화 배포 서비스</h1> 
             <p className='mt-3 '>
             사용자가 원하는 구성에 따라 쿠버네티스 클러스터를 자동으로 배포하고 구성할 수 있는 기능을 제공하며 개발자는 간편한 인터페이스를 통해 애플리케이션을 배포하고 관리할 수 있습니다. 또한 롤링 업데이트 및 롤백 기능을 통해 안정적인 배포를 보장합니다.
             쿠버네티스 클러스터와 애플리케이션의 상태를 지속적으로 모니터링하고 문제가 발생할 경우 즉시 경고를 제공하여 신속한 대응을 가능하게 합니다.
             자동화된 프로비저닝 및 배포 프로세스로 개발 및 운영 팀은 시간과 노력을 절약하고 생산성을 향상시킬 수 있으며 일관된 환경에서 애플리케이션을 운영함으로써 안정성과 신뢰성을 확보하고 장애 상황에 대비할 수 있습니다.
             </p>  
             <p>사용도구</p>
            <ul>
              <li>K8S</li>
              <li>Docker</li>
              <li>SonarQube</li>
              <li>ArgoCD</li>
              <li>Jenkins</li>
              <li>Grafana</li>
              <li>ReactJS</li>
              <li>NodaJS</li>
            </ul>           
        </div>
        <div className='col-md-6 '>
        <img src={img2} alt='home' className='img-fluid about-img' />
        </div>

    </div>
</div>
  )
}
