# 🛍️ ShopHub - Custom Backend Setup Guide

## 📋 Overview

This project now includes a **custom Node.js/Express backend** with a JSON-based database. No more external FakeStore API!

---

## 🚀 Quick Start

### **Step 1: Install Dependencies**

```bash
npm install
```

This will install both frontend and backend dependencies including:
- `express` - Backend framework
- `cors` - Cross-origin resource sharing
- `concurrently` - Run multiple commands simultaneously

---

### **Step 2: Start Backend & Frontend Together**

Run both server and dev environment at the same time:

```bash
npm run dev:all
```

**This will:**
- ✅ Start backend on `http://localhost:5000`
- ✅ Start frontend on `http://localhost:5174`
- ✅ Database file: `db.json` (auto-created)

---

### **Step 3: Alternative - Run Separately**

**Terminal 1 - Start Backend Only:**
```bash
npm run server
```

**Terminal 2 - Start Frontend Only:**
```bash
npm run dev
```

---

## 📚 API Endpoints

### **Products**
```
GET    /api/products              - Get all products
GET    /api/products/:id          - Get product by ID
POST   /api/products              - Create new product
PUT    /api/products/:id          - Update product
DELETE /api/products/:id          - Delete product
GET    /api/products/category/:category - Get products by category
```

### **Categories**
```
GET    /api/categories            - Get all categories
```

### **Authentication**
```
POST   /api/auth/login            - Login user
POST   /api/auth/register         - Register new user
```

---

## 📝 Database Structure

**File:** `db.json` (auto-created in project root)

```json
{
  "products": [
    {
      "id": 1,
      "title": "Wireless Headphones",
      "price": 99.99,
      "category": "electronics",
      "description": "Premium wireless headphones",
      "image": "https://via.placeholder.com/300x300?text=Headphones",
      "rating": 4.5,
      "stock": 50,
      "createdAt": "2026-05-03T10:00:00Z"
    }
  ],
  "categories": [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
  ]
}
```

---

## 🎯 Admin Panel Usage

### **Add Product via API**
1. Go to `/admin/dashboard`
2. Click "Products"
3. Click "Add New Product"
4. Fill in details:
   - Title, Price, Category
   - Description, Image URL
   - Rating (0-5), Stock quantity
5. Click "Add Product"
6. ✅ Product is saved to `db.json` and visible everywhere

### **Delete Product**
1. Go to Admin Products
2. Click "Delete" button
3. Confirm deletion
4. ✅ Product is removed from database

---

## 🧪 Test the API

### **Using cURL**

**Get all products:**
```bash
curl http://localhost:5000/api/products
```

**Add a product:**
```bash
curl -X POST http://localhost:5000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Test Product",
    "price": 99.99,
    "category": "electronics",
    "description": "Test product",
    "image": "https://via.placeholder.com/300",
    "rating": 5,
    "stock": 10
  }'
```

**Update a product:**
```bash
curl -X PUT http://localhost:5000/api/products/1 \
  -H "Content-Type: application/json" \
  -d '{"title": "Updated Title"}'
```

**Delete a product:**
```bash
curl -X DELETE http://localhost:5000/api/products/1
```

---

## 🔐 Test Credentials

**For Login/Register testing:**
- Email: `test@example.com`
- Password: `password123`

---

## 📂 Project Structure

```
my-app/
├── server.js                 # Express backend server
├── db.json                  # JSON database (auto-created)
├── package.json             # Dependencies & scripts
├── src/
│   ├── pages/
│   │   └── AdminProducts.jsx   # Now uses API instead of AdminContext
│   └── services/
│       └── api.js           # Updated to use localhost:5000
└── ...
```

---

## 🔄 Features

✅ **Full CRUD Operations**
- Create, Read, Update, Delete products
- All operations persist to `db.json`

✅ **Product Management**
- Add products from admin panel
- Edit existing products
- Delete products
- View all products

✅ **Category Support**
- Filter by category
- Manage categories

✅ **No External Dependencies**
- 100% self-hosted
- No FakeStore API needed
- Full control over data

---

## 🛠️ Troubleshooting

### **Port Already in Use**

If port 5000 or 5174 is already in use, you can modify `server.js`:

```javascript
const PORT = 5000; // Change to any available port
```

And in `vite.config.js`:
```javascript
server: {
  port: 5174 // Change to any available port
}
```

### **Database File Not Created**

The `db.json` file will auto-create on first server start. If it doesn't:
1. Ensure write permissions in project directory
2. Check server logs for errors
3. Create manually with initial data

### **CORS Errors**

Make sure backend is running on `localhost:5000` and frontend API points to it.

Check `src/services/api.js`:
```javascript
const API_BASE_URL = 'http://localhost:5000/api';
```

---

## 📊 Next Steps

1. ✅ Start backend and frontend together: `npm run dev:all`
2. ✅ Go to Admin Panel: `http://localhost:5174/admin/login`
3. ✅ Add/Edit/Delete products
4. ✅ View products on main site
5. ✅ All changes saved to `db.json`

---

## 🎉 You Now Have a Complete Ecommerce App with Custom Backend!

Enjoy building! 🚀
