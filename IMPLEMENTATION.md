# ShopHub - Implementation Documentation

## Architecture Overview

This document provides detailed information about the ecommerce application structure and implementation.

## 1. State Management with Context API

### CartContext (src/context/CartContext.jsx)

The application uses React Context API to manage global state for cart and authentication:

```jsx
// Usage in components
import { useCart } from '../context/CartContext';

function MyComponent() {
  const { cart, addToCart, getTotalPrice } = useCart();
  // ...
}
```

**Context provides:**
- `cart[]` - Array of cart items with quantity
- `user{}` - Current logged-in user or null
- `addToCart(product)` - Add product to cart
- `removeFromCart(productId)` - Remove product from cart
- `updateQuantity(productId, quantity)` - Update product quantity
- `clearCart()` - Empty the cart
- `getTotalPrice()` - Calculate total cart value
- `login(userData)` - Set logged-in user
- `logout()` - Clear user session

**Why Context API?**
- No need for Redux for this simple app
- Built-in to React
- Easy to understand and implement
- Sufficient for cart and auth state

## 2. API Service Layer

### services/api.js

Centralized API calls using Axios with FakeStore API:

```javascript
// All API calls go through this service
import { getProducts, getProductById, getCategories } from '../services/api';

const products = await getProducts();
const product = await getProductById(1);
const categories = await getCategories();
```

**Benefits:**
- Centralized error handling
- Single point to modify API endpoint
- Reusable across components
- Easy to test and mock

## 3. Utility Functions

### utils/helpers.js

Pure functions for common business logic:

```javascript
// Price formatting
formatPrice(99.99) // Returns "$99.99"

// Search/Filter/Sort
const filtered = searchProducts(products, 'laptop');
const category = filterByCategory(products, 'electronics');
const sorted = sortProducts(products, 'price-asc');

// Validation
validateEmail('user@example.com');
validatePassword('password123');
```

**Why separate utilities?**
- Easy to test
- Reusable across components
- No side effects (pure functions)
- Single responsibility principle

## 4. Component Architecture

### Layout Components

**Navbar.jsx**
- Fixed header with navigation
- Displays cart count badge
- Shows user info when logged in
- Uses custom hooks for state

**Footer.jsx**
- Static footer with links
- Company information
- Responsive grid layout

### Feature Components

**ProductCard.jsx**
- Reusable card for displaying products
- Shows image, title, price, rating
- Action buttons for navigation and cart

**SearchBar.jsx**
- Combined search, filter, sort component
- Handles multiple filter states
- Callback-based for flexibility

**LoadingSpinner.jsx**
- Animated loading indicator
- Full-screen centered display

**ErrorMessage.jsx**
- Error display component
- Retry functionality
- User-friendly messages

### Page Components

**Home.jsx**
- Fetches products and categories on mount
- Combines search, filter, and sort
- Grid layout for responsive design
- Error handling and loading states

**ProductDetails.jsx**
- Dynamic route parameter (:id)
- Quantity selector
- Add to cart with custom quantity
- Displays full product info

**Cart.jsx**
- Lists cart items
- Quantity adjustment buttons
- Remove items
- Order summary sidebar
- Empty cart handling

**Checkout.jsx**
- Form-based checkout flow
- Shipping and payment info
- Real-time form validation
- Order processing simulation

**Login.jsx**
- Toggle between login and register modes
- Form validation with error display
- Mock authentication
- Demo credentials

## 5. Data Flow Patterns

### Adding Product to Cart Flow

```
User clicks "Add to Cart"
    ↓
handleAddToCart() in ProductCard
    ↓
calls useCart().addToCart(product)
    ↓
CartContext updates state
    ↓
localStorage automatically updated (useEffect)
    ↓
Navbar badge updates (re-render)
    ↓
Alert confirms to user
```

### Checkout Flow

```
User fills checkout form
    ↓
Validates all fields
    ↓
User submits form
    ↓
Simulates API call (setTimeout)
    ↓
Clears cart
    ↓
Shows success message
    ↓
Redirects to home
```

### Search/Filter Flow

```
User types in search/selects filter
    ↓
handleChange() callback triggers
    ↓
Updates state in Home component
    ↓
useEffect runs with new dependencies
    ↓
Applies filters using helper functions
    ↓
Updates filteredProducts state
    ↓
Grid re-renders with filtered products
```

## 6. localStorage Integration

### What Gets Stored

1. **cart** - Complete cart array with quantities
   ```javascript
   [
     { id: 1, title: "...", price: 99.99, quantity: 2, image: "..." },
     { id: 2, title: "...", price: 49.99, quantity: 1, image: "..." }
   ]
   ```

2. **user** - Logged-in user info
   ```javascript
   {
     id: 1,
     email: "user@example.com",
     name: "John Doe",
     token: "fake-token-123"
   }
   ```

### How It Works

In CartContext.jsx:
```jsx
// Load on mount
const [cart, setCart] = useState(() => {
  const saved = localStorage.getItem('cart');
  return saved ? JSON.parse(saved) : [];
});

// Save on change (useEffect)
useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cart));
}, [cart]);
```

## 7. Routing Structure

### React Router Setup

```jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/product/:id" element={<ProductDetails />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/login" element={<Login />} />
    <Route path="*" element={<Home />} /> // Fallback
  </Routes>
</BrowserRouter>
```

**Dynamic Routes:**
- `/product/:id` - Uses useParams() to get product ID

**Navigation:**
```jsx
// Link for navigation
<Link to="/product/1">View Product</Link>

// Programmatic navigation
const navigate = useNavigate();
navigate('/');
```

## 8. Error Handling Strategy

### API Level
```javascript
try {
  const data = await getProducts();
} catch (error) {
  setError('Failed to load products. Please try again.');
}
```

### Form Level
```javascript
const errors = {};
if (!formData.email) errors.email = 'Email is required';
if (!validateEmail(formData.email)) errors.email = 'Invalid email';
setErrors(errors);
```

### Component Level
```jsx
if (loading) return <LoadingSpinner />;
if (error) return <ErrorMessage message={error} onRetry={handleRetry} />;
if (!product) return <ErrorMessage message="Product not found" />;
```

## 9. Responsive Design

### Tailwind Breakpoints Used

- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px

### Grid Layouts

```jsx
// Product grid - responsive columns
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

// Checkout layout - stacked to side-by-side
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
```

### Navigation - Mobile Friendly

- Sticky navbar
- Hamburger menu can be added
- Touch-friendly buttons
- Large enough tap targets

## 10. Performance Considerations

### Optimizations Already In Place

1. **Code Splitting** - Vite automatically code-splits
2. **Image Optimization** - FakeStore provides optimized images
3. **Efficient Re-renders** - useCallback, useEffect dependencies
4. **CSS Optimization** - Tailwind purges unused CSS

### Future Optimizations

```javascript
// Lazy loading pages
const Home = lazy(() => import('./pages/Home'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));

// Suspense boundary
<Suspense fallback={<LoadingSpinner />}>
  <Routes>...</Routes>
</Suspense>
```

## 11. Extension Points

### Adding New Features

**New Page:**
1. Create page in `src/pages/NewPage.jsx`
2. Import and add route in `App.jsx`
3. Add link in Navbar if needed

**New Component:**
1. Create in `src/components/NewComponent.jsx`
2. Export and import where needed
3. Pass props for communication

**New API Endpoint:**
1. Add function to `src/services/api.js`
2. Use in page components
3. Handle errors and loading

**New Helper Function:**
1. Add to `src/utils/helpers.js`
2. Write unit tests
3. Export and use

### Adding Authentication

Replace mock auth in `services/api.js`:
```javascript
export const login = async (email, password) => {
  const response = await apiClient.post('/auth/login', {
    email,
    password
  });
  return response.data; // Should return { token, user }
};
```

### Adding Backend Integration

Update API base URL:
```javascript
const API_BASE_URL = 'https://api.yourdomain.com';
```

Add Bearer token to requests:
```javascript
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
```

## 12. Best Practices Followed

✅ **Component Composition** - Small, reusable components
✅ **Separation of Concerns** - API, utils, components separated
✅ **DRY (Don't Repeat Yourself)** - Reusable components and helpers
✅ **Error Handling** - Graceful error messages
✅ **Loading States** - User feedback during async operations
✅ **Form Validation** - Comprehensive validation
✅ **Responsive Design** - Mobile-first approach
✅ **Clean Code** - Comments, consistent naming, organized structure
✅ **Accessibility** - Semantic HTML, ARIA attributes
✅ **Performance** - Optimized renders, lazy loading ready

---

For more information, see [README.md](./README.md)
