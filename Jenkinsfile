pipeline {
    agent any

    tools {
        git 'Default'
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://git-codecommit.ap-south-1.amazonaws.com/v1/repos/Snapcoins'
            }
        }

        stage('Build and Test') {
            steps {
                bat 'npm install'
                bat 'npm test'
            }
        }
    }
}
