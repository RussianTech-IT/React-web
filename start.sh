cd frontend
npm run build
cd ..

cd admin
npm run build
cd ..

cd backend
docker-compose build && docker-compose up
