docker build -t frontend .
docker run --name rutech-frontend -d -p 3000:3000 frontend
echo "Go to https://localhost:3000"