# Quick Start Guide & Development Tips

## 🚀 Quick Start

### 1. Run the Application

```bash
cd my-app
npm install
npm run dev
```

Open [http://localhost:5174](http://localhost:5174) in your browser.

### 2. Key Pages to Explore

| Page | URL | Purpose |
|------|-----|---------|
| Home | `/` | Browse all products with search/filter |
| Product Details | `/product/1` | View detailed product info |
| Cart | `/cart` | View shopping cart |
| Checkout | `/checkout` | Complete purchase |
| Login | `/login` | Login or register |

### 3. Demo Credentials

- **Email:** `demo@example.com`
- **Password:** `demo123`

### 4. Test Features

1. **Search Products** - Type in the search bar on home page
2. **Filter by Category** - Select from category dropdown
3. **Sort Products** - Choose sort option
4. **Add to Cart** - Click "Add to Cart" on any product
5. **View Cart** - Click cart icon in navbar
6. **Checkout** - Fill form and "Place Order"
7. **Login** - Use demo credentials

---

## 💻 Development Tips

### Running Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

### Project Structure Quick Reference

```
my-app/
├── src/
│   ├── components/     # Reusable UI pieces
│   ├── pages/         # Full pages
│   ├── services/      # API calls
│   ├── context/       # Global state
│   ├── utils/         # Helper functions
│   ├── App.jsx        # Main component
│   ├── main.jsx       # Entry point
│   └── index.css      # Styles
├── public/            # Static files
├── package.json       # Dependencies
├── vite.config.js     # Vite config
├── tailwind.config.js # Tailwind config
└── README.md          # Documentation
```

### Adding a New Product Category

1. Edit `services/api.js` to filter by new category
2. Categories already come from FakeStore API
3. No changes needed - works automatically!

### Adding a New Page

1. **Create page component:**
```jsx
// src/pages/NewPage.jsx
export default function NewPage() {
  return <div>New Page Content</div>;
}
```

2. **Add route in App.jsx:**
```jsx
import NewPage from './pages/NewPage';

<Routes>
  {/* ... existing routes ... */}
  <Route path="/new-page" element={<NewPage />} />
</Routes>
```

3. **Add navigation link in Navbar.jsx:**
```jsx
<Link to="/new-page">New Page</Link>
```

### Modifying Styling

All styling uses Tailwind CSS:

```jsx
// Adding styles to component
<div className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition">
  Styled with Tailwind
</div>
```

Add custom CSS in `src/index.css`:
```css
@layer components {
  .custom-button {
    @apply px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700;
  }
}
```

### Working with API

Check product data structure:
```javascript
// API returns products like this:
{
  id: 1,
  title: "Product name",
  price: 109.95,
  description: "Product description",
  category: "electronics",
  image: "https://...",
  rating: {
    rate: 3.9,
    count: 120
  }
}
```

### Debugging Tips

1. **Open DevTools:** Press `F12` or `Ctrl+Shift+I`
2. **Console Errors:** Check browser console for errors
3. **React DevTools:** Install React DevTools extension
4. **Network Tab:** Check API calls in Network tab
5. **Local Storage:** View in DevTools → Application → Local Storage

### Adding Temporary Logging

```jsx
useEffect(() => {
  console.log('Cart updated:', cart);
}, [cart]);

console.log('Product:', product);
```

### Testing the Cart

1. Add several products with different quantities
2. Refresh the page - items should still be there (localStorage)
3. Open another tab and add more - both tabs should sync
4. Clear localStorage manually to reset

### Modifying Mock API Responses

Edit `services/api.js` to change mock data:

```javascript
export const login = async (email, password) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        email,
        name: email.split('@')[0],
        token: 'fake-token-' + Date.now(),
        // Add more fields here
        role: 'admin', // New field
      });
    }, 500);
  });
};
```

### Common Issues & Solutions

**Q: Products not showing?**
- Check network tab - API call may be failing
- Verify internet connection
- Check browser console for errors

**Q: Styles not applying?**
- Reload page (Ctrl+Shift+R)
- Check class names are correct
- Verify Tailwind CSS is imported

**Q: Cart data lost after refresh?**
- localStorage might be cleared
- Check browser storage permissions
- Verify localStorage code in CartContext.jsx

**Q: Routes not working?**
- Verify route path in App.jsx
- Check component imports
- Clear browser cache

### Performance Tips

1. Use React DevTools Profiler to identify slow renders
2. Check Network tab for slow API calls
3. Use Vite's built-in optimizations
4. Lazy load images with `loading="lazy"`

### Code Style

Follow existing patterns:
- Use functional components with hooks
- Export components as default
- Add JSDoc comments to functions
- Use camelCase for variables
- Use PascalCase for components
- Keep components under 300 lines

### Git Workflow

```bash
# Create new branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "Add new feature"

# Push to remote
git push origin feature/new-feature
```

### Building for Production

```bash
# Build optimized version
npm run build

# Creates dist/ folder with optimized files
# Deploy dist/ folder to hosting service

# Preview build locally
npm run preview
```

### Environment Variables

Create `.env` file for sensitive data:
```
VITE_API_URL=https://api.example.com
VITE_API_KEY=your-api-key
```

Use in code:
```javascript
const API_URL = import.meta.env.VITE_API_URL;
```

### Adding Debugging Plugin

```javascript
// Add to services/api.js
apiClient.interceptors.response.use(
  response => {
    console.log('API Response:', response);
    return response;
  },
  error => {
    console.error('API Error:', error);
    throw error;
  }
);
```

### Testing Different Screen Sizes

Chrome DevTools:
1. Press F12
2. Click device toggle (or Ctrl+Shift+M)
3. Select device or custom dimensions

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| Ctrl+Shift+I | Open DevTools |
| F12 | Open DevTools |
| Ctrl+Shift+R | Hard refresh |
| Ctrl+Shift+M | Toggle device toolbar |
| Ctrl+` | Toggle terminal in VS Code |

### Useful Browser Extensions

- React DevTools
- Redux DevTools
- Tailwind CSS IntelliSense
- ES7+ React/Redux/GraphQL

### Community Resources

- [React Discord](https://discord.gg/react)
- [Stack Overflow React Tag](https://stackoverflow.com/questions/tagged/react)
- [React GitHub Discussions](https://github.com/facebook/react/discussions)

---

## Next Steps

1. **Explore the Code** - Read through components and understand flow
2. **Make Changes** - Try modifying styles or adding features
3. **Test Features** - Click through all pages and test functionality
4. **Deploy** - Deploy to Vercel, Netlify, or GitHub Pages
5. **Extend** - Add new features and integrate real API

---

**Need Help?** Check the [README.md](./README.md) and [IMPLEMENTATION.md](./IMPLEMENTATION.md) for more details.

Happy Coding! 🚀
