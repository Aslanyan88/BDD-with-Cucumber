pipeline {
    agent any

    stages {
        stage('Setup Node.js') {
            steps {
                bat 'node -v'
                bat 'npm -v'
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
