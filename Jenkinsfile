pipeline {
    agent any

    tools {
        nodejs 'nodejs' // This name must match the name configured in Jenkins Global Tool Configuration
    }

    stages {
        stage('Setup') {
            steps {
                // The nodejs step makes the configured Node.js available in the PATH
                sh 'node -v'
                sh 'npm -v'
            }
        }

        stage('Install Dependencies') {
            steps {
                // npm install will use the Node.js provided by the nodejs step
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                // Test execution will use the Node.js and npm from the environment
                sh 'npm run test:smoke'
            }
        }
    }

    post {
        always {
            // Publish JUnit reports (ensure you have the JUnit reporter configured in wdio.conf.js)
            junit allowEmptyResults: true, testResults: 'results/*.xml'
        }
    }
}
