import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/helpers';

/**
 * ProductCard Component
 * Displays a single product with image, details, and action buttons
 * @param {Object} product - Product object
 */
export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
    // Could add a toast notification here
    alert('Product added to cart!');
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden flex flex-col h-full">
      {/* Product Image */}
      <Link to={`/product/${product.id}`} className="relative bg-gray-100 h-48 overflow-hidden group">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain p-4 group-hover:scale-110 transition"
        />
      </Link>

      {/* Product Details */}
      <div className="p-4 flex-grow flex flex-col">
        {/* Category Badge */}
        <span className="inline-block w-fit bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded mb-2 capitalize">
          {product.category}
        </span>

        {/* Product Title */}
        <Link to={`/product/${product.id}`} className="text-sm font-semibold text-gray-800 hover:text-blue-600 transition line-clamp-2 mb-2">
          {product.title}
        </Link>

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center gap-1 mb-3 text-sm">
            <span className="text-yellow-400">★</span>
            <span className="text-gray-700 font-semibold">{product.rating.rate}</span>
            <span className="text-gray-500">({product.rating.count} reviews)</span>
          </div>
        )}

        {/* Price */}
        <div className="mt-auto mb-4">
          <p className="text-xl font-bold text-blue-600">{formatPrice(product.price)}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Link
            to={`/product/${product.id}`}
            className="flex-1 btn-secondary text-center text-sm"
          >
            View Details
          </Link>
          <button
            onClick={handleAddToCart}
            className="btn-primary text-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
