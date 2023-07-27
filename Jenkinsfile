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

        stage('Build') {
            steps {
                
                dir('client') {
                    bat 'npm install'
                    //bat 'npm test'
                }

                dir('servers/gamer-module') {
                    bat 'npm install'
                    //bat 'npm test'
                }

                dir('servers/merchant-module') {
                    bat 'npm install'
                    //bat 'npm test'
                }

                dir('servers/gaming-vendor-module') {
                    bat 'npm install'
                    //bat 'npm test'
                }

                dir('servers/general-module') {
                    bat 'npm install'
                    //bat 'npm test'
                }
            }
        }
    }
}
