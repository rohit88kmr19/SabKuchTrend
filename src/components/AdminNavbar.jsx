import { Link, useNavigate } from 'react-router-dom';
import { useAdmin } from '../context/AdminContext';

/**
 * Admin Navbar Component
 * Navigation for admin panel
 */
export default function AdminNavbar() {
  const navigate = useNavigate();
  const { adminUser, logoutAdmin } = useAdmin();

  const handleLogout = () => {
    logoutAdmin();
    navigate('/admin/login');
  };

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">🛠️ ShopHub Admin</span>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-6 items-center">
            <Link
              to="/admin/dashboard"
              className="text-gray-300 hover:text-white transition flex items-center gap-2"
            >
              📊 Dashboard
            </Link>
            <Link
              to="/admin/products"
              className="text-gray-300 hover:text-white transition flex items-center gap-2"
            >
              📦 Products
            </Link>
            <Link
              to="/admin/orders"
              className="text-gray-300 hover:text-white transition flex items-center gap-2"
            >
              📋 Orders
            </Link>
            <Link
              to="/admin/reviews"
              className="text-gray-300 hover:text-white transition flex items-center gap-2"
            >
              ⭐ Reviews
            </Link>
            <Link
              to="/admin/emails"
              className="text-gray-300 hover:text-white transition flex items-center gap-2"
            >
              ✉️ Emails
            </Link>

            {/* User Info */}
            <div className="border-l border-gray-700 pl-6">
              <div className="text-sm">
                <p className="text-gray-400">Logged in as</p>
                <p className="font-semibold">{adminUser?.name}</p>
              </div>
            </div>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
