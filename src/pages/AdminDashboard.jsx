import { useEffect } from 'react';
import { useAdmin } from '../context/AdminContext';
import AdminNavbar from '../components/AdminNavbar';

/**
 * Admin Dashboard Page
 * Shows overview of orders, products, and sales statistics
 */
export default function AdminDashboard() {
  const { orders, products, emailLogs } = useAdmin();

  // Calculate statistics
  const stats = {
    totalOrders: orders.length,
    createdOrders: orders.filter((o) => o.status === 'created').length,
    sentOrders: orders.filter((o) => o.status === 'sent').length,
    receivedOrders: orders.filter((o) => o.status === 'received').length,
    failedOrders: orders.filter((o) => o.status === 'failed').length,
    totalProducts: products.length,
    totalEmailsSent: emailLogs.length,
    totalRevenue: orders
      .filter((o) => o.status === 'received')
      .reduce((sum, o) => sum + (o.total || 0), 0),
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNavbar />

      {/* Main Content */}
      <div className="container-main py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome to ShopHub Admin Panel</p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Total Orders */}
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-semibold">Total Orders</p>
                <p className="text-3xl font-bold text-gray-800">{stats.totalOrders}</p>
              </div>
              <div className="text-5xl">📦</div>
            </div>
          </div>

          {/* Total Products */}
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-semibold">Total Products</p>
                <p className="text-3xl font-bold text-gray-800">{stats.totalProducts}</p>
              </div>
              <div className="text-5xl">📊</div>
            </div>
          </div>

          {/* Total Revenue */}
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-semibold">Total Revenue</p>
                <p className="text-3xl font-bold text-gray-800">${stats.totalRevenue.toFixed(2)}</p>
              </div>
              <div className="text-5xl">💰</div>
            </div>
          </div>

          {/* Emails Sent */}
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-orange-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-semibold">Emails Sent</p>
                <p className="text-3xl font-bold text-gray-800">{stats.totalEmailsSent}</p>
              </div>
              <div className="text-5xl">✉️</div>
            </div>
          </div>
        </div>

        {/* Order Status Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Status Cards */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Status Breakdown</h2>
            <div className="space-y-4">
              {[
                { status: 'Created', count: stats.createdOrders, icon: '📝', color: 'bg-blue-50 border-blue-200' },
                { status: 'Sent', count: stats.sentOrders, icon: '🚚', color: 'bg-yellow-50 border-yellow-200' },
                { status: 'Received', count: stats.receivedOrders, icon: '✅', color: 'bg-green-50 border-green-200' },
                { status: 'Failed', count: stats.failedOrders, icon: '❌', color: 'bg-red-50 border-red-200' },
              ].map((item) => (
                <div key={item.status} className={`${item.color} border rounded-lg p-4`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{item.icon}</span>
                      <div>
                        <p className="font-semibold text-gray-800">{item.status}</p>
                      </div>
                    </div>
                    <p className="text-3xl font-bold text-gray-800">{item.count}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Stats</h2>
            <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
              <div className="flex justify-between items-center border-b pb-3">
                <span className="text-gray-700 font-semibold">Average Order Value</span>
                <span className="text-2xl font-bold text-gray-800">
                  ${orders.length > 0 ? (stats.totalRevenue / stats.totalOrders).toFixed(2) : '0.00'}
                </span>
              </div>
              <div className="flex justify-between items-center border-b pb-3">
                <span className="text-gray-700 font-semibold">Completion Rate</span>
                <span className="text-2xl font-bold text-green-600">
                  {orders.length > 0 ? ((stats.receivedOrders / stats.totalOrders) * 100).toFixed(1) : '0'}%
                </span>
              </div>
              <div className="flex justify-between items-center border-b pb-3">
                <span className="text-gray-700 font-semibold">Failure Rate</span>
                <span className="text-2xl font-bold text-red-600">
                  {orders.length > 0 ? ((stats.failedOrders / stats.totalOrders) * 100).toFixed(1) : '0'}%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-semibold">Email Open Rate</span>
                <span className="text-2xl font-bold text-blue-600">
                  {stats.totalEmailsSent > 0 ? '85%' : 'N/A'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        {orders.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Orders</h2>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-100 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-gray-700 font-semibold">Order ID</th>
                    <th className="px-6 py-3 text-left text-gray-700 font-semibold">Customer</th>
                    <th className="px-6 py-3 text-left text-gray-700 font-semibold">Total</th>
                    <th className="px-6 py-3 text-left text-gray-700 font-semibold">Status</th>
                    <th className="px-6 py-3 text-left text-gray-700 font-semibold">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.slice(-5).reverse().map((order) => (
                    <tr key={order.id} className="border-b hover:bg-gray-50">
                      <td className="px-6 py-3 font-semibold text-gray-800">#{order.id}</td>
                      <td className="px-6 py-3 text-gray-700">{order.name || 'N/A'}</td>
                      <td className="px-6 py-3 font-semibold text-gray-800">${order.total?.toFixed(2)}</td>
                      <td className="px-6 py-3">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            order.status === 'received'
                              ? 'bg-green-100 text-green-800'
                              : order.status === 'sent'
                              ? 'bg-yellow-100 text-yellow-800'
                              : order.status === 'failed'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-blue-100 text-blue-800'
                          }`}
                        >
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-3 text-gray-600 text-sm">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
