PWD=$(pwd)
cd frontend
npm run build
cd $PWD
cd backend
docker-compose build && docker-compose up