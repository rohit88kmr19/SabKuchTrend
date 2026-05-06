import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/helpers';

/**
 * Cart Page
 * Displays items in the shopping cart with quantity management
 */
export default function Cart() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container-main py-8">
          <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

          {/* Empty Cart Message */}
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-6">
              Start adding products to your cart!
            </p>
            <Link to="/" className="btn-primary">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-main py-8">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-6 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition"
                >
                  {/* Product Image */}
                  <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain p-2"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-grow">
                    <Link
                      to={`/product/${item.id}`}
                      className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition line-clamp-2 mb-2"
                    >
                      {item.title}
                    </Link>
                    <p className="text-blue-600 font-bold text-lg mb-3">
                      {formatPrice(item.price)}
                    </p>

                    {/* Quantity and Remove */}
                    <div className="flex items-center justify-between">
                      {/* Quantity Selector */}
                      <div className="flex items-center border border-gray-300 rounded-lg w-fit">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                        >
                          −
                        </button>
                        <span className="px-4 py-1 text-center min-w-12">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>

                      {/* Subtotal */}
                      <span className="text-lg font-bold text-gray-800">
                        {formatPrice(item.price * item.quantity)}
                      </span>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="btn-danger text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Order Summary
              </h2>

              {/* Summary Details */}
              <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                {/* Items Count */}
                <div className="flex justify-between">
                  <span className="text-gray-600">Items ({cart.length})</span>
                  <span className="font-semibold text-gray-800">
                    {formatPrice(getTotalPrice())}
                  </span>
                </div>

                {/* Shipping (Mock) */}
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold text-gray-800">
                    {getTotalPrice() > 50 ? (
                      <span className="text-green-600">FREE</span>
                    ) : (
                      formatPrice(10)
                    )}
                  </span>
                </div>

                {/* Tax (Mock) */}
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-semibold text-gray-800">
                    {formatPrice(getTotalPrice() * 0.1)}
                  </span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between mb-6">
                <span className="text-xl font-bold text-gray-800">Total</span>
                <span className="text-2xl font-bold text-blue-600">
                  {formatPrice(
                    getTotalPrice() +
                    (getTotalPrice() > 50 ? 0 : 10) +
                    getTotalPrice() * 0.1
                  )}
                </span>
              </div>

              {/* Checkout Button */}
              <Link to="/checkout" className="btn-primary w-full block text-center mb-3">
                Proceed to Checkout
              </Link>

              {/* Continue Shopping */}
              <Link to="/" className="btn-secondary w-full block text-center">
                Continue Shopping
              </Link>

              {/* Free Shipping Info */}
              {getTotalPrice() < 50 && (
                <p className="text-sm text-gray-500 mt-4 text-center">
                  Free shipping on orders over {formatPrice(50)}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
