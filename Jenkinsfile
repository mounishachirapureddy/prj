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
                
                dir('SNAPCOINS/client') {
                    bat 'npm install'
                    bat 'npm test'
                }

                dir('SNAPCOINS/servers/gamer-module') {
                    bat 'npm install'
                    bat 'npm test'
                }

                dir('SNAPCOINS/servers/merchant-module') {
                    bat 'npm install'
                    bat 'npm test'
                }

                dir('SNAPCOINS/server/gaming-vendor-module') {
                    bat 'npm install'
                    bat 'npm test'
                }

                dir('SNAPCOINS/servers/general-module') {
                    bat 'npm install'
                    bat 'npm test'
                }
            }
        }
    }
}
