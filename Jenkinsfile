pipeline{
  agent any

  stages{
    stage('Install Dependencies') {
      steps {
        script {
          echo 'Installing dependencies...'
          sh 'npm install'
        }
      }
    }

    stage('Run Tests') {
      steps {
        script {
          echo 'Running tests...'
          sh 'npm test'
        }
      }
    }

    stage('Build Success') {
      steps {
        script {
          echo 'Build and tests completed successfully!'
        }
      }
    }
  }
}