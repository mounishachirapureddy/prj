pipeline {
    agent any

    tools {
        git 'Default'
    }

    stages {
    
        checkout([
            $class: 'GitSCM', 
            branches: [[name: 'main']], 
            doGenerateSubmoduleConfigurations: false, 
            extensions: [], 
            userRemoteConfigs: [[url: 'https://git-codecommit.ap-south-1.amazonaws.com/v1/repos/Snapcoins']]
        ])
        /*
        stage('Checkout') {
            steps {
                git branch: 'main', credentialsId: 'Test', url: 'https://git-codecommit.ap-south-1.amazonaws.com/v1/repos/Snapcoins'
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

        stage('Create Docker Images'){

            steps {
                dir('client') {
                    bat 'docker build -t client-image .'
                }

                dir('servers/gamer-module') {
                    bat 'docker build -t gamer-module .'
                }

                dir('servers/merchant-module') {
                    bat 'docker build -t merchant-module .'
                }
                
                dir('servers/gaming-vendor-module') {
                    bat 'docker build -t gaming-vendor-module .'
                }

                dir('servers/general-module') {
                    bat 'docker build -t general-module .'
                }
                
            }

        }
        */
    }
}

