pipeline {
  agent any
  environment {
    // Docker Hub login
    repoUser = 'ntnexx'
    // Docker Hub repo name
    repoName = 'api'
  }
  stages {
    stage('Setup') {
      steps {
        echo 'Setting up environment variables ...'
        script {
          // Unique app name
          env.appName = env.BRANCH_NAME == 'master' ? 'nexx_me_front' : 'nexx_me_front_dev'
          // App domain address
          env.appHost = env.BRANCH_NAME == 'master' ? 'nexx.me' : 'dev.nexx.me'
          // Swarm node to place the app into
          env.deployNode = env.BRANCH_NAME == 'master' ? 'prod-node-1' : 'dev-node-1'
          // Nginx configuration file
          env.nginxConf = env.BRANCH_NAME == 'master' ? 'prod.nginx.conf' : 'dev.nginx.conf'
        }
      }
    }
    stage('Build') {
      steps {
        echo "Building ..."
        sh 'docker build . --file Dockerfile -t ${repoUser}/${repoName}:${appName}'
        // dockerRepoPass is a global env var added in UI
        sh 'docker login -u ${repoUser} -p ${dockerRepoPass}'
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
        sh 'sed -e "s|\\${appHost}|$appHost|" -e "s|\\${appName}|$appName|" ${nginxConf} > /var/letsencrypt/site-confs/${appName}'
        script {
          if (env.BRANCH_NAME != 'master') {
            sh 'cp .htpasswd /var/letsencrypt/etc/${appName}.htpasswd'
          }
        }
        sh 'cp docker-compose.yml docker-compose.yml.tmp'
        sh 'sed -e "s|\\${appName}|$appName|" docker-compose.yml.tmp > docker-compose.yml'
        sh 'rm -rf docker-compose.yml.tmp'
        sh 'docker stack deploy --prune --with-registry-auth --compose-file docker-compose.yml ${appName}'
        sh 'docker exec $(docker ps | grep letsencrypt | grep -Eo \'(^[0-9a-z]{12})\') kill -HUP $(docker exec $(docker ps | grep letsencrypt | grep -Eo \'(^[0-9a-z]{12})\') ps -o pid,args | grep master | grep -Eo \'^ +([0-9]+) +\')'
        echo 'Deployed'
      }
    }
    // stage('Integration test') {
    //   steps {
    //     echo 'Integration testing ...'
    //     sh 'docker ps'
    //     sh 'docker ps | grep ${appName}'
    //     sh 'docker exec -it $(docker ps | grep ${appName} | grep -Eo \'(^[0-9a-z]{12})\') yarn test-integration'
    //     echo 'Tested'
    //   }
    // }
  }
}