import { createContext, useContext, useState, useEffect } from 'react';

/**
 * Admin Context
 * Manages admin state including products, orders, and email logs
 * Products are synced with the backend API
 */
const AdminContext = createContext();
const API_URL = 'http://localhost:5000/api';

export function AdminProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [emailLogs, setEmailLogs] = useState([]);
  const [adminUser, setAdminUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch products from backend on mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${API_URL}/products`);
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

    // Load other data from localStorage
    const savedOrders = localStorage.getItem('adminOrders');
    const savedEmailLogs = localStorage.getItem('emailLogs');
    const savedAdmin = localStorage.getItem('adminUser');

    if (savedOrders) setOrders(JSON.parse(savedOrders));
    if (savedEmailLogs) setEmailLogs(JSON.parse(savedEmailLogs));
    if (savedAdmin) setAdminUser(JSON.parse(savedAdmin));
  }, []);

  // Save orders to localStorage
  const updateOrders = (newOrders) => {
    setOrders(newOrders);
    localStorage.setItem('adminOrders', JSON.stringify(newOrders));
  };

  // Add or update product via API
  const saveProduct = async (product) => {
    try {
      let response;
      if (product.id) {
        // Update existing product
        response = await fetch(`${API_URL}/products/${product.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(product),
        });
      } else {
        // Add new product
        response = await fetch(`${API_URL}/products`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(product),
        });
      }

      if (response.ok) {
        const savedProduct = await response.json();
        setProducts((prev) =>
          product.id
            ? prev.map((p) => (p.id === product.id ? savedProduct : p))
            : [...prev, savedProduct]
        );
      }
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  // Delete product via API
  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`${API_URL}/products/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setProducts((prev) => prev.filter((p) => p.id !== id));
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  // Update order status
  const updateOrderStatus = (orderId, status) => {
    const updated = orders.map((o) =>
      o.id === orderId ? { ...o, status, updatedAt: new Date().toISOString() } : o
    );
    updateOrders(updated);
  };

  // Send order email
  const sendOrderEmail = (orderId) => {
    const order = orders.find((o) => o.id === orderId);
    if (!order) return;

    const emailLog = {
      id: Date.now(),
      orderId,
      customerEmail: order.email,
      subject: `Order Confirmation - #${orderId}`,
      body: `Your order has been confirmed. Order ID: ${orderId}. Total: $${order.total}`,
      sentAt: new Date().toISOString(),
      status: 'sent',
    };

    const updated = [...emailLogs, emailLog];
    setEmailLogs(updated);
    localStorage.setItem('emailLogs', JSON.stringify(updated));
  };

  // Login admin
  const loginAdmin = (email, password) => {
    if (email === 'admin@shophub.com' && password === 'admin123') {
      const admin = { email, name: 'Admin', role: 'super_admin' };
      setAdminUser(admin);
      localStorage.setItem('adminUser', JSON.stringify(admin));
      return true;
    }
    return false;
  };

  // Logout admin
  const logoutAdmin = () => {
    setAdminUser(null);
    localStorage.removeItem('adminUser');
  };

  return (
    <AdminContext.Provider
      value={{
        products,
        orders,
        emailLogs,
        adminUser,
        loading,
        saveProduct,
        deleteProduct,
        updateOrderStatus,
        sendOrderEmail,
        loginAdmin,
        logoutAdmin,
        updateOrders,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  return useContext(AdminContext);
}
