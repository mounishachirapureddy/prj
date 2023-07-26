pipeline {
    agent any

    tools {
        git 'Default'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://git-codecommit.ap-south-1.amazonaws.com/v1/repos/Snapcoins'
            }
        }

        stage('Build and Test') {
            steps {
                sh 'npm install'
                sh 'npm test'
            }
        }
    }
}
