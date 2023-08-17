docker build -t backend .
docker run --name rutech-backend -d -p 5000:5000 backend