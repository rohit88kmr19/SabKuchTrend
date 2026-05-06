import { Link } from 'react-router-dom';

/**
 * Footer Component
 * Displays footer information and links
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="container-main py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">🛍️ ShopHub</h3>
            <p className="text-gray-400">
              Your one-stop shop for amazing products and great deals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/products" className="hover:text-white transition">Products</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
              <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/help-center" className="hover:text-white transition">Help Center</Link></li>
              <li><Link to="/shipping-info" className="hover:text-white transition">Shipping Info</Link></li>
              <li><Link to="/returns" className="hover:text-white transition">Returns</Link></li>
              <li><Link to="/faq" className="hover:text-white transition">FAQ</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex justify-between items-center">
            <p className="text-gray-400">
              &copy; {currentYear} ShopHub. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="/" className="text-gray-400 hover:text-white transition">Privacy</a>
              <a href="/" className="text-gray-400 hover:text-white transition">Terms</a>
              <a href="/" className="text-gray-400 hover:text-white transition">Contact</a>
              <a href="/admin/login" className="text-gray-600 hover:text-gray-400 transition text-xs">Admin</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
