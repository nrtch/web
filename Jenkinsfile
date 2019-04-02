pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'Building ... ${env.dockerRepoPass} ${env.BRANCH_NAME}'
        sh 'docker build . --file Dockerfile -t ${repoUser}/${repoName}:${appName}'
        // dockerRepoPass is a global secret added in UI
        sh 'docker login -u ${repoUser} -p ${env.dockerRepoPass}'
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
        sh 'envsubst \'$appHost,$appName\' < ${env.BRANCH_NAME == 'master' ? 'prod' : 'dev'}.nginx.conf > /var/letsencrypt/site-confs/${appName}'

        // script {
        //   if (env.BRANCH_NAME == 'dev') {
        //     sh 'cp .htpasswd /var/letsencrypt/etc/${appName}.htpasswd'
        //   }
        // }

        when {
          branch 'dev'
        }
        steps {
          echo 'DEVELOPMENT'
          sh 'cp .htpasswd /var/letsencrypt/etc/${appName}.htpasswd'
        }

        sh 'docker stack deploy --prune --with-registry-auth --compose-file docker-compose.yml ${appName}'
        sh 'docker exec $(docker ps | grep letsencrypt | grep -Eo \'(^[0-9a-z]{12})\') kill -HUP $(docker exec $(docker ps | grep letsencrypt | grep -Eo \'(^[0-9a-z]{12})\') ps -o pid,args | grep master | grep -Eo \'^ +([0-9]+) +\')'
        echo 'Deployed'
      }
    }
  }
  environment {
    // Unique name
    appName = env.BRANCH_NAME == 'master' ? 'nexx_me_front' : 'nexx_me_front_dev'
    // Domain address
    appHost = env.BRANCH_NAME == 'master' ? 'nexx.me' : 'dev.nexx.me'
    // Docker Hub login
    repoUser = 'ntnexx'
    // Docker Hub repo name
    repoName = 'api'
    // Swarm node to place the app
    deployNode = env.BRANCH_NAME == 'master' ? 'prod-node-1' : 'dev-node-1'
  }
}