/**
 * Format price to currency format
 * @param {number} price - Price to format
 * @returns {string} Formatted price
 */
export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
};

/**
 * Search products by title and description
 * @param {Array} products - Array of products
 * @param {string} searchTerm - Search term
 * @returns {Array} Filtered products
 */
export const searchProducts = (products, searchTerm) => {
  if (!searchTerm.trim()) return products;

  const lowerTerm = searchTerm.toLowerCase();
  return products.filter(
    (product) =>
      product.title.toLowerCase().includes(lowerTerm) ||
      product.description.toLowerCase().includes(lowerTerm)
  );
};

/**
 * Filter products by category
 * @param {Array} products - Array of products
 * @param {string} category - Category to filter
 * @returns {Array} Filtered products
 */
export const filterByCategory = (products, category) => {
  if (!category || category === 'all') return products;
  return products.filter((product) => product.category === category);
};

/**
 * Filter products by price range
 * @param {Array} products - Array of products
 * @param {number} minPrice - Minimum price
 * @param {number} maxPrice - Maximum price
 * @returns {Array} Filtered products
 */
export const filterByPrice = (products, minPrice, maxPrice) => {
  return products.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );
};

/**
 * Sort products
 * @param {Array} products - Array of products
 * @param {string} sortBy - Sort criteria (price-asc, price-desc, name-asc, name-desc, rating)
 * @returns {Array} Sorted products
 */
export const sortProducts = (products, sortBy) => {
  const sorted = [...products];

  switch (sortBy) {
    case 'price-asc':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return sorted.sort((a, b) => b.price - a.price);
    case 'name-asc':
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    case 'name-desc':
      return sorted.sort((a, b) => b.title.localeCompare(a.title));
    case 'rating':
      return sorted.sort((a, b) => (b.rating?.rate || 0) - (a.rating?.rate || 0));
    default:
      return sorted;
  }
};

/**
 * Validate email
 * @param {string} email - Email to validate
 * @returns {boolean} Is valid email
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate password
 * @param {string} password - Password to validate
 * @returns {boolean} Is valid password (min 6 characters)
 */
export const validatePassword = (password) => {
  return password && password.length >= 6;
};
