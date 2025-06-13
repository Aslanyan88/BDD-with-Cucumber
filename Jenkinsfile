pipeline {
    agent any
    
    tools {
        nodejs 'nodejs'
    }

    stages {
        stage('Setup') {
            steps {
                nodejs(nodeJSInstallationName: 'nodejs') {
                    sh 'node -v'
                    sh 'npm -v'
                }
            }
        }
        
        stage('Install Dependencies') {
            steps {
                nodejs(nodeJSInstallationName: 'nodejs') {
                    sh 'npm install'
                }
            }
        }
        
        stage('Run Tests') {
            steps {
                nodejs(nodeJSInstallationName: 'nodejs') {
                    sh 'npm run test:smoke'
                }
            }
        }
    }

    post {
        always {
            junit allowEmptyResults: true, testResults: 'results/*.xml'
        }
    }
}
