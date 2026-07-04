import { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import AdminNavbar from '../components/AdminNavbar';

/**
 * Admin Orders Management Page
 * View and manage orders, update status, send emails
 */
export default function AdminOrders() {
  const { orders, updateOrderStatus, sendOrderEmail, deleteOrder } = useAdmin();
  const [filter, setFilter] = useState('all');
  const [expandedOrder, setExpandedOrder] = useState(null);

  const filteredOrders = filter === 'all' ? orders : orders.filter((o) => o.status === filter);

  const handleStatusChange = (orderId, newStatus) => {
    updateOrderStatus(orderId, newStatus);
  };

  const handleSendEmail = (orderId) => {
    sendOrderEmail(orderId);
    alert('Order confirmation email sent successfully!');
  };

  const handleDeleteOrder = (orderId) => {
    if (window.confirm('Are you sure you want to delete this order?')) {
      deleteOrder(orderId);
      alert('Order deleted successfully!');
      if (expandedOrder === orderId) {
        setExpandedOrder(null);
      }
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'received':
        return 'bg-green-100 text-green-800';
      case 'sent':
        return 'bg-yellow-100 text-yellow-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNavbar />

      <div className="container-main py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Order Management</h1>
          <p className="text-gray-600">Total Orders: {orders.length}</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-4 mb-8 overflow-x-auto">
          {['all', 'created', 'sent', 'received', 'failed'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-6 py-2 rounded-lg font-semibold transition whitespace-nowrap ${
                filter === status
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)} (
              {status === 'all' ? orders.length : orders.filter((o) => o.status === status).length})
            </button>
          ))}
        </div>

        {/* Orders List */}
        {filteredOrders.length > 0 ? (
          <div className="space-y-4">
            {filteredOrders.map((order) => (
              <div key={order.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Order Header */}
                <div className="p-6 border-b cursor-pointer hover:bg-gray-50" onClick={() => setExpandedOrder(expandedOrder === order.id ? null : order.id)}>
                  <div className="flex items-center justify-between">
                    <div className="flex-grow">
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="font-bold text-gray-800 text-lg">Order #{order.id}</p>
                          <p className="text-gray-600 text-sm">
                            {new Date(order.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg text-gray-800">${order.total?.toFixed(2)}</p>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
                          order.status
                        )}`}
                      >
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Order Details (Expandable) */}
                {expandedOrder === order.id && (
                  <div className="p-6 bg-gray-50 space-y-6">
                    {/* Customer Information */}
                    <div>
                      <h3 className="font-bold text-gray-800 mb-3">Customer Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-gray-600 text-sm">Name</p>
                          <p className="font-semibold text-gray-800">{order.name}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Email</p>
                          <p className="font-semibold text-gray-800">{order.email}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Phone</p>
                          <p className="font-semibold text-gray-800">{order.phone}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Address</p>
                          <p className="font-semibold text-gray-800">{order.address}</p>
                        </div>
                      </div>
                    </div>

                    {/* Items */}
                    {order.items && order.items.length > 0 && (
                      <div>
                        <h3 className="font-bold text-gray-800 mb-3">Order Items</h3>
                        <div className="bg-white rounded p-4 space-y-2">
                          {order.items.map((item, idx) => (
                            <div key={idx} className="flex justify-between border-b pb-2">
                              <span className="text-gray-700">
                                {item.name} x {item.quantity}
                              </span>
                              <span className="font-semibold text-gray-800">
                                ${(item.price * item.quantity).toFixed(2)}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Status Management */}
                    <div>
                      <h3 className="font-bold text-gray-800 mb-3">Update Status</h3>
                      <div className="flex gap-2">
                        {['created', 'sent', 'received', 'failed'].map((status) => (
                          <button
                            key={status}
                            onClick={() => handleStatusChange(order.id, status)}
                            className={`px-4 py-2 rounded-lg font-semibold transition text-sm ${
                              order.status === status
                                ? 'bg-blue-600 text-white'
                                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            {status.charAt(0).toUpperCase() + status.slice(1)}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Send Email */}
                    <div>
                      <button
                        onClick={() => handleSendEmail(order.id)}
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition"
                      >
                        📧 Send Confirmation Email
                      </button>
                    </div>

                    {/* Delete Order */}
                    <div>
                      <button
                        onClick={() => handleDeleteOrder(order.id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition"
                      >
                        🗑️ Delete Order
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <p className="text-2xl text-gray-600">No orders found</p>
          </div>
        )}
      </div>
    </div>
  );
}
