# Lab Task 1 - Node.js CI/CD Pipeline

## Objective
Automate Node.js application testing, Docker image building, and publishing using GitHub Actions.

## Technologies
- Node.js
- Git
- GitHub
- GitHub Actions
- Docker
- Docker Hub

## CI/CD Workflow
1. Developer pushes code to GitHub.
2. GitHub Actions triggers the workflow.
3. Node.js dependencies are installed.
4. Application tests are executed.
5. Docker image is built.
6. Docker Hub authentication is performed.
7. Docker image is pushed to Docker Hub.

## Project Structure
- app.js - Node.js application
- app.test.js - Application tests
- package.json - Project configuration
- package-lock.json - Dependency lock file
- Dockerfile - Docker configuration
- .dockerignore - Docker build exclusions
- .github/workflows/main.yml - CI/CD workflow

## Run Locally
npm install
npm test
npm start

Application URL: http://localhost:3000

## Docker
docker build -t nodejs-demo-app .
docker run -p 3000:3000 nodejs-demo-app

## Docker Hub
Image: YOUR_DOCKERHUB_USERNAME/nodejs-demo-app

## Security
Docker Hub credentials are stored using GitHub Actions repository secrets.

## Outcome
Implemented automated testing, Docker image building, and publishing through GitHub Actions.
