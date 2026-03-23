pipeline {
    agent any

    stages {
        stage('Clone Code') {
            steps {
                git branch: 'main', url: 'https://github.com/ravindran-exe/devops-1.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t react-sample .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker stop react-sample || true'
                sh 'docker rm react-sample || true'
                sh 'docker run -d -p 80:80 --name react-sample react-sample'
            }
        }
        stage('Cleanup') {
            steps {
                sh 'docker system prune -f'
            }
        }
    }
}
