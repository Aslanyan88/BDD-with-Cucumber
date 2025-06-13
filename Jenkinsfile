pipeline {
    agent any

    tools {
        nodejs 'Node_20'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        
        stage('Run Tests') {
            steps {
                bat 'npm run test:smoke'
            }
        }
    }

    post {
        always {
            junit allowEmptyResults: true, testResults: 'results/*.xml'
        }
    }
    }
}
