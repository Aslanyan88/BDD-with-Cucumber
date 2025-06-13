pipeline {
    agent any

    stages {
        stage('Setup Node.js') {
            steps {
                sh '''
                    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo bash -
                    sudo apt-get update
                    sudo apt-get install -y nodejs
                    node -v
                    npm -v
                '''
            }
        }
        
        stage('Install Chrome') {
            steps {
                sh '''
                    sudo apt-get update
                    sudo apt-get install -y chromium-browser
                '''
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh '''
                    sudo chown -R jenkins:jenkins .
                    npm install
                '''
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
