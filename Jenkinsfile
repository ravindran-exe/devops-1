pipeline {
    agent any

    environment {
        IMAGE_NAME = "react-sample"
        IMAGE_TAG = "${BUILD_NUMBER}"
        CONTAINER_NAME = "react-sample"
    }

    stages {

        stage('Clone Code') {
            steps {
                git branch: 'main', url: 'https://github.com/ravindran-exe/devops-1.git'
            }
        }

        stage('Build Image') {
            steps {
                sh '''
                docker build -t $IMAGE_NAME:$IMAGE_TAG .
                '''
            }
        }

        stage('Stop Old Container') {
            steps {
                sh '''
                docker stop $CONTAINER_NAME || true
                docker rm $CONTAINER_NAME || true
                '''
            }
        }

        stage('Run New Container') {
            steps {
                sh '''
                docker run -d -p 80:80 --name $CONTAINER_NAME $IMAGE_NAME:$IMAGE_TAG
                '''
            }
        }

        stage('Post Cleanup') {
            steps {
                sh '''
                docker image prune -f
                '''
            }
        }
    }
}