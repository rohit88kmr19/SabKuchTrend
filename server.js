import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;
const DB_FILE = path.join(__dirname, 'db.json');

// Middleware
app.use(cors());
app.use(express.json());

// ==================== DATABASE HELPERS ====================
const readDB = () => {
  try {
    if (!fs.existsSync(DB_FILE)) {
      const initialData = {
        products: [
          {
            id: 1,
            title: 'Wireless Headphones',
            price: 99.99,
            category: 'electronics',
            description: 'Premium wireless headphones with noise cancellation',
            image: 'https://via.placeholder.com/300x300?text=Headphones',
            rating: 4.5,
            stock: 50,
          },
          {
            id: 2,
            title: 'Smart Watch',
            price: 199.99,
            category: 'electronics',
            description: 'Advanced smartwatch with fitness tracking',
            image: 'https://via.placeholder.com/300x300?text=SmartWatch',
            rating: 4.7,
            stock: 30,
          },
        ],
        categories: ['electronics', 'jewelery', "men's clothing", "women's clothing"],
        reviews: [],
      };
      fs.writeFileSync(DB_FILE, JSON.stringify(initialData, null, 2));
    }
    return JSON.parse(fs.readFileSync(DB_FILE, 'utf-8'));
  } catch (error) {
    console.error('Error reading database:', error);
    return { products: [], categories: [], reviews: [] };
  }
};

const writeDB = (data) => {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error writing to database:', error);
  }
};

// ==================== PRODUCT ROUTES ====================

// GET all products
app.get('/api/products', (req, res) => {
  try {
    const db = readDB();
    res.json(db.products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// GET product by ID
app.get('/api/products/:id', (req, res) => {
  try {
    const db = readDB();
    const product = db.products.find((p) => p.id === parseInt(req.params.id));
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch product' });
  }
});

// GET products by category
app.get('/api/products/category/:category', (req, res) => {
  try {
    const db = readDB();
    const products = db.products.filter(
      (p) => p.category.toLowerCase() === req.params.category.toLowerCase()
    );
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products by category' });
  }
});

// CREATE product
app.post('/api/products', (req, res) => {
  try {
    const db = readDB();
    const { title, price, category, description, image, rating, stock } = req.body;

    if (!title || !price || !category) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const newProduct = {
      id: Math.max(...db.products.map((p) => p.id), 0) + 1,
      title,
      price: parseFloat(price),
      category,
      description: description || '',
      image: image || '',
      rating: parseFloat(rating) || 5,
      stock: parseInt(stock) || 0,
      createdAt: new Date().toISOString(),
    };

    db.products.push(newProduct);
    writeDB(db);
    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Failed to create product' });
  }
});

// UPDATE product
app.put('/api/products/:id', (req, res) => {
  try {
    const db = readDB();
    const productIndex = db.products.findIndex((p) => p.id === parseInt(req.params.id));

    if (productIndex === -1) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const { title, price, category, description, image, rating, stock } = req.body;
    db.products[productIndex] = {
      ...db.products[productIndex],
      title: title || db.products[productIndex].title,
      price: price !== undefined ? parseFloat(price) : db.products[productIndex].price,
      category: category || db.products[productIndex].category,
      description: description !== undefined ? description : db.products[productIndex].description,
      image: image !== undefined ? image : db.products[productIndex].image,
      rating: rating !== undefined ? parseFloat(rating) : db.products[productIndex].rating,
      stock: stock !== undefined ? parseInt(stock) : db.products[productIndex].stock,
      updatedAt: new Date().toISOString(),
    };

    writeDB(db);
    res.json(db.products[productIndex]);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Failed to update product' });
  }
});

// DELETE product
app.delete('/api/products/:id', (req, res) => {
  try {
    const db = readDB();
    const productIndex = db.products.findIndex((p) => p.id === parseInt(req.params.id));

    if (productIndex === -1) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const deletedProduct = db.products.splice(productIndex, 1);
    writeDB(db);
    res.json({ message: 'Product deleted', product: deletedProduct[0] });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

// ==================== CATEGORY ROUTES ====================

// GET all categories
app.get('/api/categories', (req, res) => {
  try {
    const db = readDB();
    res.json(db.categories);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
});

// ==================== REVIEW ROUTES ====================

// GET all reviews
app.get('/api/reviews', (req, res) => {
  try {
    const db = readDB();
    res.json(db.reviews || []);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
});

// GET reviews by product ID
app.get('/api/reviews/product/:productId', (req, res) => {
  try {
    const db = readDB();
    const productReviews = (db.reviews || []).filter(
      (r) => r.productId === parseInt(req.params.productId)
    );
    res.json(productReviews);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
});

// CREATE review
app.post('/api/reviews', (req, res) => {
  try {
    const db = readDB();
    const { productId, author, rating, comment } = req.body;

    if (!productId || !author || !rating || !comment) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const newReview = {
      id: Math.max(...(db.reviews || []).map((r) => r.id || 0), 0) + 1,
      productId: parseInt(productId),
      author,
      rating: parseInt(rating),
      comment,
      createdAt: new Date().toISOString(),
    };

    if (!db.reviews) {
      db.reviews = [];
    }
    db.reviews.push(newReview);
    writeDB(db);
    res.status(201).json(newReview);
  } catch (error) {
    console.error('Error creating review:', error);
    res.status(500).json({ error: 'Failed to create review' });
  }
});

// DELETE review
app.delete('/api/reviews/:id', (req, res) => {
  try {
    const db = readDB();
    const reviewIndex = (db.reviews || []).findIndex((r) => r.id === parseInt(req.params.id));

    if (reviewIndex === -1) {
      return res.status(404).json({ error: 'Review not found' });
    }

    const deletedReview = db.reviews.splice(reviewIndex, 1);
    writeDB(db);
    res.json({ message: 'Review deleted', review: deletedReview[0] });
  } catch (error) {
    console.error('Error deleting review:', error);
    res.status(500).json({ error: 'Failed to delete review' });
  }
});

// ==================== AUTH ROUTES ====================

// LOGIN
app.post('/api/auth/login', (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Mock authentication
    if (email === 'test@example.com' && password === 'password123') {
      return res.json({
        id: 1,
        email,
        name: 'Test User',
        token: 'mock-token-' + Date.now(),
      });
    }

    res.status(401).json({ error: 'Invalid credentials' });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
});

// REGISTER
app.post('/api/auth/register', (req, res) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
      return res.status(400).json({ error: 'Email, password, and name are required' });
    }

    res.status(201).json({
      id: Date.now(),
      email,
      name,
      token: 'mock-token-' + Date.now(),
    });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
});

// ==================== HEALTH CHECK ====================

app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date().toISOString() });
});

// ==================== START SERVER ====================

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`📦 Database file: ${DB_FILE}`);
  console.log(`\n📚 API Endpoints:`);
  console.log(`   GET    /api/products`);
  console.log(`   GET    /api/products/:id`);
  console.log(`   POST   /api/products`);
  console.log(`   PUT    /api/products/:id`);
  console.log(`   DELETE /api/products/:id`);
  console.log(`   GET    /api/categories`);
  console.log(`   POST   /api/auth/login`);
  console.log(`   POST   /api/auth/register`);
});
