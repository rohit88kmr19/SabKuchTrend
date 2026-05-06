import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getProducts, getCategories } from '../services/api';
import { useAdmin } from '../context/AdminContext';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { searchProducts, filterByCategory, sortProducts } from '../utils/helpers';

/**
 * Products Page
 * Browse all products with search, filter, and sort functionality
 */
export default function Products() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const { products: adminProducts } = useAdmin();

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all');
  const [selectedSort, setSelectedSort] = useState('');

  // Fetch products and categories on component mount
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

        // Combine API products with admin products
        const allProducts = [...productsData, ...adminProducts];
        setProducts(allProducts);
        setFilteredProducts(allProducts);
        setCategories(categoriesData);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [adminProducts]);

  // Apply filters and search
  useEffect(() => {
    let result = products;

    // Apply search filter
    result = searchProducts(result, searchTerm);

    // Apply category filter
    result = filterByCategory(result, selectedCategory);

    // Apply sorting
    result = sortProducts(result, selectedSort);

    setFilteredProducts(result);
  }, [products, searchTerm, selectedCategory, selectedSort]);

  // Handle search
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Handle sort change
  const handleSortChange = (sort) => {
    setSelectedSort(sort);
  };

  // Handle retry
  const handleRetry = () => {
    window.location.reload();
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} onRetry={handleRetry} />;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container-main">
          <h1 className="text-4xl font-bold mb-2">Our Products</h1>
          <p className="text-lg text-blue-100">Browse our complete collection</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-main py-8">
        {/* Search and Filter Bar */}
        <SearchBar
          onSearch={handleSearch}
          categories={categories}
          onCategoryChange={handleCategoryChange}
          onSortChange={handleSortChange}
        />

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <>
            <p className="text-gray-600 mb-4">
              Showing <span className="font-bold">{filteredProducts.length}</span> products
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        ) : (
          <div className="flex justify-center items-center min-h-96">
            <div className="text-center">
              <p className="text-2xl font-semibold text-gray-600 mb-2">
                No products found
              </p>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
