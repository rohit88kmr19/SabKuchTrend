# ShopHub - Ecommerce Web Application

A fully functional ecommerce web application built with React, Vite, Tailwind CSS, and Axios.

## 🚀 Features

### Core Features
- **Product Listing**: Browse all products with pagination and grid layout
- **Product Details**: View detailed information about individual products
- **Shopping Cart**: Add, remove, and update product quantities
- **Cart Persistence**: Cart data persists using localStorage
- **Checkout Process**: Complete order form with validation
- **User Authentication**: Login and Register functionality (mock)
- **Responsive Design**: Mobile-friendly interface using Tailwind CSS

### Advanced Features
- **Search Functionality**: Search products by name and description
- **Category Filtering**: Filter products by category
- **Price Sorting**: Sort products by price (low to high, high to low)
- **Rating Display**: Show product ratings and review counts
- **Order Summary**: View detailed order breakdown with tax and shipping
- **Form Validation**: Comprehensive form validation for checkout and login
- **Error Handling**: User-friendly error messages and loading states
- **Free Shipping**: Free shipping for orders over $50

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation header with cart icon
│   ├── Footer.jsx      # Footer component
│   ├── ProductCard.jsx # Product card component
│   ├── SearchBar.jsx   # Search and filter bar
│   ├── LoadingSpinner.jsx # Loading indicator
│   └── ErrorMessage.jsx # Error display component
├── pages/              # Page components
│   ├── Home.jsx        # Home page with product listing
│   ├── ProductDetails.jsx # Product details page
│   ├── Cart.jsx        # Shopping cart page
│   ├── Checkout.jsx    # Checkout/payment page
│   └── Login.jsx       # Login/Register page
├── services/           # API calls and external services
│   └── api.js          # FakeStore API integration
├── context/            # React Context for state management
│   └── CartContext.jsx # Cart and user context
├── utils/              # Utility functions
│   └── helpers.js      # Helper functions (formatting, filtering, etc.)
├── App.jsx             # Main app component with routing
├── main.jsx            # Entry point
└── index.css           # Global styles with Tailwind

```

## 🛠️ Technologies Used

- **React 19** - UI framework
- **React Router DOM** - Client-side routing
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API calls
- **FakeStore API** - Dummy product data

## 📦 Installation & Setup

### Prerequisites
- Node.js 18.0 or higher
- npm or yarn

### Installation

1. **Install dependencies**
```bash
npm install
```

2. **Start development server**
```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or next available port)

3. **Build for production**
```bash
npm run build
```

4. **Preview production build**
```bash
npm run preview
```

## 🎯 Key Components Explained

### Cart Context (CartContext.jsx)
Manages global cart and user state using React Context:
- Add/remove products from cart
- Update product quantities
- User authentication (login/logout)
- localStorage persistence

### API Service (services/api.js)
Handles all API calls:
- `getProducts()` - Fetch all products
- `getProductById(id)` - Fetch single product
- `getProductsByCategory(category)` - Filter by category
- `getCategories()` - Get available categories
- `login()` - Mock login
- `register()` - Mock register

### Helper Functions (utils/helpers.js)
Utility functions for common operations:
- `formatPrice()` - Format prices as currency
- `searchProducts()` - Search by title/description
- `filterByCategory()` - Filter products by category
- `filterByPrice()` - Filter by price range
- `sortProducts()` - Sort by various criteria
- `validateEmail()` - Email validation
- `validatePassword()` - Password validation

## 🔧 Features Breakdown

### Product Listing
- Displays 20 products from FakeStore API
- Grid layout (1 column on mobile, 2 on tablet, 4 on desktop)
- Shows product image, title, price, and rating
- Quick view and add to cart buttons

### Product Details Page
- Full product information
- High-quality product image
- Detailed description
- Customer rating and reviews count
- Quantity selector
- Add to cart with custom quantity

### Shopping Cart
- View all cart items
- Adjust quantities
- Remove products
- Cart total calculation
- Order summary with breakdown
- Proceed to checkout button

### Checkout
- Shipping information form
- Payment information form
- Form validation
- Order summary
- Mock order processing

### Authentication
- Login page with form validation
- Registration page with password confirmation
- Mock authentication
- User data persistence
- Logout functionality

## 🎨 Styling

The application uses **Tailwind CSS** for styling with custom utility classes:
- `btn-primary` - Primary action button (blue)
- `btn-secondary` - Secondary action button (gray)
- `btn-danger` - Danger/Delete button (red)
- `container-main` - Main container with max-width and padding

All components are fully responsive and mobile-friendly.

## 📝 Usage Examples

### Adding a Product to Cart
```jsx
const { addToCart } = useCart();
addToCart(product); // Automatically increments quantity if product exists
```

### Accessing Cart Data
```jsx
const { cart, getTotalPrice } = useCart();
console.log(cart); // Array of cart items
console.log(getTotalPrice()); // Total price calculation
```

### Searching Products
```jsx
import { searchProducts } from './utils/helpers';
const filtered = searchProducts(products, 'laptop');
```

## 🔐 Authentication (Mock)

Default demo credentials:
- Email: `demo@example.com`
- Password: `demo123`

Note: This is a mock authentication system. In production, implement proper backend authentication.

## 🌐 API Integration

The application uses the **FakeStore API** for product data:
- Endpoint: `https://fakestoreapi.com`
- 20 products across 4 categories
- Real product images and descriptions

## 💾 Local Storage

The application persists the following data:
- **cart** - Shopping cart items and quantities
- **user** - Logged-in user information

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (1 column)
- **Tablet**: 640px - 1024px (2-3 columns)
- **Desktop**: > 1024px (4 columns)

## 🚀 Performance Optimizations

- Lazy loading of product images
- Efficient re-rendering with React hooks
- CSS-in-JS optimization with Tailwind
- Optimized bundle size with Vite

## 📋 File Organization Best Practices

- **Components**: Reusable, single responsibility
- **Pages**: Full page components with routing
- **Services**: External API calls separated from components
- **Context**: Global state management
- **Utils**: Pure functions for business logic
- **CSS**: Utility-first approach with Tailwind

## 🐛 Error Handling

- API error handling with try-catch
- Form validation with error messages
- User-friendly error pages
- Loading states with spinner

## 🔄 State Management

Uses React Context API for:
- Global cart state
- User authentication state
- localStorage synchronization

## 💡 Tips for Development

1. **Add New Product**: Just modify the API service
2. **Add New Page**: Create component in pages/, add route in App.jsx
3. **Add New Component**: Create in components/, import where needed
4. **Styling**: Use existing Tailwind classes, add new ones in index.css
5. **API Calls**: Use helpers in utils/helpers.js for common operations

## 📚 Resources

- [React Documentation](https://react.dev)
- [React Router](https://reactrouter.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Axios Documentation](https://axios-http.com)
- [FakeStore API](https://fakestoreapi.com)
- [Vite Documentation](https://vitejs.dev)

## 🎓 Learning Outcomes

This project demonstrates:
- React functional components and hooks
- React Router for navigation
- Context API for state management
- Tailwind CSS for responsive design
- API integration with Axios
- Form handling and validation
- localStorage for data persistence
- Component composition and reusability
- Error handling and loading states

## 📄 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Feel free to fork, modify, and improve this project!

---

**Happy Coding! 🚀**

If you have any questions or suggestions, feel free to reach out.

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
