import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../context/AdminContext';

/**
 * Admin Login Page
 */
export default function AdminLogin() {
  const navigate = useNavigate();
  const { loginAdmin } = useAdmin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showCredentials, setShowCredentials] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    if (loginAdmin(email, password)) {
      navigate('/admin/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  const fillDemoCredentials = () => {
    setEmail('admin@shophub.com');
    setPassword('admin123');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">🛠️ Admin Panel</h1>
          <p className="text-gray-600">Login to manage your store</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@shophub.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition"
          >
            Login
          </button>
        </form>

        {/* Demo Credentials */}
        <div className="mt-8 border-t border-gray-300 pt-8">
          <p className="text-gray-700 text-sm mb-4 font-semibold">Demo Credentials:</p>
          <div className="bg-gray-50 p-4 rounded-lg mb-4 space-y-2">
            <p className="text-gray-700">
              <strong>Email:</strong> <code className="bg-gray-200 px-2 py-1 rounded">admin@shophub.com</code>
            </p>
            <p className="text-gray-700">
              <strong>Password:</strong> <code className="bg-gray-200 px-2 py-1 rounded">admin123</code>
            </p>
          </div>
          <button
            type="button"
            onClick={fillDemoCredentials}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 rounded-lg transition"
          >
            Auto-fill Demo Credentials
          </button>
        </div>

        {/* Back Link */}
        <div className="text-center mt-6">
          <p className="text-gray-600">
            Back to store?{' '}
            <a href="/" className="text-blue-600 hover:text-blue-800 font-semibold">
              Go to Home
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
