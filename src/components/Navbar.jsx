import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

/**
 * Navbar Component
 * Displays navigation links, logo, and cart icon with item count
 */
export default function Navbar() {
  const { cart, user, logout } = useCart();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-main py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
          🛍️ SabKuch Trend
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-6 items-center">
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
            Home
          </Link>
          <Link to="/products" className="text-gray-700 hover:text-blue-600 transition">
            Products
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 transition">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition">
            Contact
          </Link>

          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Hi, {user.name}</span>
              <button
                onClick={logout}
                className="btn-secondary text-sm"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn-primary">
              Login
            </Link>
          )}

          {/* Cart Icon */}
          <Link
            to="/cart"
            className="relative flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            🛒
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
