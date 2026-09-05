pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Run Tests') {
            steps {
                bat 'python -m unittest discover -s tests -v'
            }
        }
    }

    post {
        success {
            echo 'Loop tests passed successfully.'
        }

        failure {
            echo 'Loop tests failed.'
        }
    }
}