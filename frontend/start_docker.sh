docker build -t react-kramar:latest .
docker run --name rutech-frontend -d -p 3000:3000 react-kramar:latest