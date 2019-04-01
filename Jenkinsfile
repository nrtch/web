pipeline {
  agent any
  parameters {
    password(name: 'repoPass', description: 'Docker repository password')
  }
  stages {
    stage('Build') {
      steps {
        echo 'Building ...'
        sh 'docker build . --file Dockerfile -t ${repoUser}/${repoName}:${appName}'
        sh 'docker login -u ${repoUser} -p ${repoPass}'
        sh 'docker push ${repoUser}/${repoName}:${appName}'
        sh 'docker rmi ${repoUser}/${repoName}:${appName}'
        sh 'docker system prune -f'
        echo 'Built'
      }
    }
    stage('Test') {
      steps {
        echo 'Testing ...'
        sh 'ls /var/letsencrypt'
        echo 'Tested'
      }
    }
    stage('Deploy') {
      steps {
        echo 'Deploying ...'
        sh 'envsubst \'$appHost,$appName\' < nginx.conf > /var/letsencrypt/site-confs/${appName}'
        sh 'docker stack deploy --prune --with-registry-auth --compose-file docker-compose.yml ${appName}'
        sh 'docker exec $(docker ps | grep letsencrypt | grep -Eo \'(^[0-9a-z]{12})\') kill -HUP $(docker exec $(docker ps | grep letsencrypt | grep -Eo \'(^[0-9a-z]{12})\') ps -o pid,args | grep master | grep -Eo \'^ +([0-9]+) +\')'
        echo 'Deployed'
      }
    }
  }
  environment {
    appName = 'nexx_me_front'
    appHost = 'nexx.me'
    repoUser = 'ntnexx' // Docker Hub login
    repoName = 'api' // Docker Hub repo name
    deployNode = 'prod-node-1' // Swarm node to place the app, e.g. prod-node-1
  }
}