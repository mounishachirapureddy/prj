pipeline {
    agent any
    environment {
        registry = "083118395813.dkr.ecr.ap-south-1.amazonaws.com/jenkins-build-pipeline"
    }

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
                    // bat 'npm test'
                }

                dir('servers/gamer-module') {
                    bat 'npm install'
                    // bat 'npm test'
                }

                dir('servers/merchant-module') {
                    bat 'npm install'
                    // bat 'npm test'
                }

                dir('servers/gaming-vendor-module') {
                    bat 'npm install'
                    // bat 'npm test'
                }

                dir('servers/general-module') {
                    bat 'npm install'
                    // bat 'npm test'
                }
            }
        }

        stage('Create Docker Images') {

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

        stage('Push Image to ECR Repo') {
            steps {
                sh 'aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin 083118395813.dkr.ecr.ap-south-1.amazonaws.com'
                sh 'docker push 083118395813.dkr.ecr.ap-south-1.amazonaws.com/jenkins-build-pipeline:latest'
            }
        }

        stage('Deploy') {
            steps {
                sh 'aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin 083118395813.dkr.ecr.ap-south-1.amazonaws.com'
                sh 'docker pull 083118395813.dkr.ecr.ap-south-1.amazonaws.com/jenkins-build-pipeline:latest'
                sh 'docker ps -q --filter "name=todo" | grep -q . && docker stop todo && docker rm -f todo'
                sh 'docker run --name todo -dp 80:3000 083118395813.dkr.ecr.ap-south-1.amazonaws.com/jenkins-build-pipeline:latest'
            }
        }
    }
}
