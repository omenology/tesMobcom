untuk menjalankan app 
masukan command "docker-compose -up -d" untuk mendalankan db
lalu "yarn sequelize db:seed:all" unuk mengisi db
"yarn dev" untuk menjalankan app

endpoint yang tersedia

GET localhost:4000/api/posts // untuk mendapatkan semua news
GET localhost:4000/api/posts/:id // untuk mendapatakn spesifik news berdasakran id
