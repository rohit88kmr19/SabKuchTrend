import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProducts, getCategories } from '../services/api';
import ProductCard from '../components/ProductCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

/**
 * Home Page
 * Professional landing page with featured products and categories
 */
export default function Home() {
  const [categories, setCategories] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch products and categories in parallel
        const [productsData, categoriesData] = await Promise.all([
          getProducts(),
          getCategories(),
        ]);

        // Set featured products (first 8) from API
        setFeaturedProducts(productsData.slice(0, 8));
        setCategories(categoriesData);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle retry
  const handleRetry = () => {
    window.location.reload();
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} onRetry={handleRetry} />;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Hero Content */}
            <div>
              <h1 className="text-5xl font-bold mb-4">
                Welcome to SabKuch Trend
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                Discover thousands of high-quality products at unbeatable prices. 
                Your one-stop shop for everything you need.
              </p>
              <div className="flex gap-4">
                <Link 
                  to="/products" 
                  className="btn-primary bg-white text-blue-600 hover:bg-gray-100"
                >
                  Shop Now
                </Link>
                <Link 
                  to="/about" 
                  className="btn-secondary bg-blue-700 text-white border-blue-700 hover:bg-blue-600"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex items-center justify-center">
              <div className="text-8xl animate-bounce">🛍️</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-12">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="text-4xl mb-3">🚚</div>
              <h3 className="font-bold text-gray-800 mb-2">Free Shipping</h3>
              <p className="text-gray-600 text-sm">On orders over $50</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="text-4xl mb-3">🔒</div>
              <h3 className="font-bold text-gray-800 mb-2">Secure Payment</h3>
              <p className="text-gray-600 text-sm">100% encrypted transactions</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="text-4xl mb-3">↩️</div>
              <h3 className="font-bold text-gray-800 mb-2">Easy Returns</h3>
              <p className="text-gray-600 text-sm">30-day return guarantee</p>
            </div>

            {/* Feature 4 */}
            <div className="text-center">
              <div className="text-4xl mb-3">⭐</div>
              <h3 className="font-bold text-gray-800 mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Customer service always ready</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Shop by Category</h2>
            <p className="text-gray-600 text-lg">Browse our wide selection of products</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => {
              // Map categories to emoji and colors
              const categoryInfo = {
                electronics: { emoji: '📱', color: 'from-purple-400 to-purple-600', name: 'Electronics' },
                jewelery: { emoji: '💎', color: 'from-pink-400 to-pink-600', name: 'Jewelry' },
                "men's clothing": { emoji: '👔', color: 'from-blue-400 to-blue-600', name: "Men's Clothing" },
                "women's clothing": { emoji: '👗', color: 'from-rose-400 to-rose-600', name: "Women's Clothing" },
              };

              const info = categoryInfo[category] || {
                emoji: '📦',
                color: 'from-gray-400 to-gray-600',
                name: category,
              };

              return (
                <Link
                  key={category}
                  to={`/products?category=${category}`}
                  className={`bg-gradient-to-br ${info.color} text-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition transform hover:scale-105 cursor-pointer`}
                >
                  <div className="text-6xl mb-4">{info.emoji}</div>
                  <h3 className="text-xl font-bold mb-2 capitalize">{info.name}</h3>
                  <p className="text-white text-opacity-90">Explore collection →</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Products</h2>
            <p className="text-gray-600 text-lg">Handpicked products just for you</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/products" 
              className="btn-primary"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 text-lg">Join thousands of satisfied customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-2xl">★★★★★</div>
              </div>
              <p className="text-gray-700 mb-4">
                "SabKuch Trend has the best selection and prices. I've bought several items and 
                everything arrived on time and in perfect condition. Highly recommended!"
              </p>
              <div className="flex items-center gap-3">
                <div className="text-3xl">👨‍💼</div>
                <div>
                  <p className="font-bold text-gray-800">James Wilson</p>
                  <p className="text-gray-500 text-sm">Verified Buyer</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-2xl">★★★★★</div>
              </div>
              <p className="text-gray-700 mb-4">
                "The customer service team is amazing! I had a question about my order and 
                they responded within hours. Best shopping experience ever!"
              </p>
              <div className="flex items-center gap-3">
                <div className="text-3xl">👩‍💼</div>
                <div>
                  <p className="font-bold text-gray-800">Sarah Johnson</p>
                  <p className="text-gray-500 text-sm">Verified Buyer</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-2xl">★★★★★</div>
              </div>
              <p className="text-gray-700 mb-4">
                "Quality products at great prices! The checkout process is smooth and secure. 
                I'm definitely shopping here again."
              </p>
              <div className="flex items-center gap-3">
                <div className="text-3xl">👨</div>
                <div>
                  <p className="font-bold text-gray-800">Michael Chen</p>
                  <p className="text-gray-500 text-sm">Verified Buyer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container-main">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-blue-100 mb-6">
              Subscribe to our newsletter and get exclusive offers, new products, 
              and special deals delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="btn-primary bg-white text-blue-600 hover:bg-gray-100">
                Subscribe
              </button>
            </div>
            <p className="text-blue-100 text-sm mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-white">
        <div className="container-main">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Shopping?</h2>
            <p className="text-blue-100 mb-8 text-lg">
              Discover amazing products and exclusive deals today
            </p>
            <Link 
              to="/products" 
              className="btn-primary bg-white text-blue-600 hover:bg-gray-100 inline-block"
            >
              Browse Products Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
