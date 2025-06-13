pipeline {
    agent any

    stages {
        stage('Setup Node.js') {
            steps {
                sh '''
                    curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
                    apt-get install -y nodejs
                    node -v
                    npm -v
                '''
            }
        }
        
        stage('Install Chrome') {
            steps {
                sh '''
                    apt-get update
                    apt-get install -y chromium-browser
                '''
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Run Tests') {
            steps {
                sh 'npm run test:smoke'
            }
        }
    }

    post {
        always {
            junit allowEmptyResults: true, testResults: 'results/*.xml'
        }
    }
}
