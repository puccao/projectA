# Food & Drink POS (Node.js, Next.js, MongoDB)

## Backend Setup

```sh
cd backend
npm install
node app.js
# hoặc dùng nodemon để tự động reload
```

## Frontend Setup

```sh
cd frontend
# Khởi tạo Next.js nếu chưa có, rồi cài tailwindcss
npm install
npm run dev
```

> **Lưu ý:** MongoDB chạy ở `mongodb://localhost:27017/fooddrinkpos` (sửa lại `backend/.env` nếu dùng kết nối khác)

- Admin thêm món tại http://localhost:3000/admin/products
- Giao diện khách tại http://localhost:3000/