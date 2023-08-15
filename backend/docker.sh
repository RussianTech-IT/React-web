docker build -t backend .
docker run --name rutech-backend -d -p 3000:3000 backend