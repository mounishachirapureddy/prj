pipeline {
    agent any
    environment {
        AWS_ACCOUNT_ID = "083118395813"
        AWS_DEFAULT_REGION = "ap-south-1"
        IMAGE_REPO_NAME = "jenkins-build-pipeline"
        IMAGE_TAG = "latest"
        REPOSITORY_URI = "083118395813.dkr.ecr.ap-south-1.amazonaws.com/jenkins-build-pipeline"
    }
    tools {
        git 'Default'
    }
    stages {
        stage('Logging into AWS ECR') {
            steps {
                script {
                    sh """aws ecr get-login-password --region ${AWS_DEFAULT_REGION} | docker login --username AWS --password-stdin ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com"""
                }
            }
        }
        stage('Cloning Git') {
            steps {
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: 'Test', url: 'https://git-codecommit.ap-south-1.amazonaws.com/v1/repos/Snapcoins']])
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
        stage('Pushing to ECR') {
            steps {
                script {
                    sh """docker tag ${IMAGE_REPO_NAME}:${IMAGE_TAG} ${REPOSITORY_URI}:$IMAGE_TAG"""
                    sh """docker push ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com/${IMAGE_REPO_NAME}:${IMAGE_TAG}"""
                }
            }
        }
    }
}
