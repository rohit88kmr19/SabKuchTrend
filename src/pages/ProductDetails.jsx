import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../services/api';
import { useCart } from '../context/CartContext';
import { useAdmin } from '../context/AdminContext';
import { formatPrice } from '../utils/helpers';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

/**
 * Product Details Page
 * Displays detailed information about a single product
 */
export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { products: adminProducts } = useAdmin();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // Fetch product details
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        // First check if it's an admin product
        const adminProduct = adminProducts.find((p) => p.id === parseInt(id));
        if (adminProduct) {
          setProduct(adminProduct);
          return;
        }

        // Otherwise fetch from API
        const data = await getProductById(id);
        setProduct(data);
      } catch (err) {
        console.error('Error fetching product:', err);
        setError('Failed to load product details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id, adminProducts]);

  // Handle add to cart
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    alert(`${quantity} product(s) added to cart!`);
    setQuantity(1);
  };

  // Handle quantity change
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(Math.max(1, value));
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!product) return <ErrorMessage message="Product not found." />;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-main py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/" className="text-blue-600 hover:text-blue-700">
            ← Back to Products
          </Link>
        </div>

        {/* Product Details */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="flex items-center justify-center bg-gray-100 rounded-lg p-8">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-96 max-w-full object-contain"
              />
            </div>

            {/* Product Information */}
            <div className="flex flex-col justify-between">
              {/* Category */}
              <span className="inline-block w-fit bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded mb-3 capitalize">
                {product.category}
              </span>

              {/* Title */}
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                {product.title}
              </h1>

              {/* Rating */}
              {product.rating && (
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-200">
                  <div className="flex items-center">
                    <span className="text-2xl text-yellow-400">★</span>
                    <span className="ml-2 text-lg font-semibold text-gray-800">
                      {product.rating.rate}
                    </span>
                  </div>
                  <span className="text-gray-500">
                    ({product.rating.count} reviews)
                  </span>
                </div>
              )}

              {/* Price */}
              <div className="mb-6">
                <p className="text-gray-600 text-sm font-semibold mb-2">Price</p>
                <p className="text-4xl font-bold text-blue-600">
                  {formatPrice(product.price)}
                </p>
              </div>

              {/* Description */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <p className="text-gray-600 text-sm font-semibold mb-2">Description</p>
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex gap-4 mb-6">
                {/* Quantity Selector */}
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-xl text-gray-600 hover:bg-gray-100"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-16 text-center border-0 focus:outline-none"
                    min="1"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-xl text-gray-600 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  className="btn-primary flex-1 text-lg"
                >
                  🛒 Add to Cart
                </button>
              </div>

              {/* Continue Shopping */}
              <Link
                to="/"
                className="btn-secondary text-center"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
