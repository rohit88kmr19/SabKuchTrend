import axios from 'axios';

// Base URL for the custom backend
const API_BASE_URL = 'http://localhost:5000/api';

// Create axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

/**
 * Fetch all products
 * @returns {Promise} Promise containing all products
 */
export const getProducts = async () => {
  try {
    const response = await apiClient.get('/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

/**
 * Fetch a single product by ID
 * @param {number} id - Product ID
 * @returns {Promise} Promise containing the product
 */
export const getProductById = async (id) => {
  try {
    const response = await apiClient.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    throw error;
  }
};

/**
 * Create a new product
 * @param {object} productData - Product data
 * @returns {Promise} Promise containing the created product
 */
export const createProduct = async (productData) => {
  try {
    const response = await apiClient.post('/products', productData);
    return response.data;
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
};

/**
 * Update a product
 * @param {number} id - Product ID
 * @param {object} productData - Product data to update
 * @returns {Promise} Promise containing the updated product
 */
export const updateProduct = async (id, productData) => {
  try {
    const response = await apiClient.put(`/products/${id}`, productData);
    return response.data;
  } catch (error) {
    console.error(`Error updating product ${id}:`, error);
    throw error;
  }
};

/**
 * Delete a product
 * @param {number} id - Product ID
 * @returns {Promise} Promise containing delete confirmation
 */
export const deleteProduct = async (id) => {
  try {
    const response = await apiClient.delete(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting product ${id}:`, error);
    throw error;
  }
};

/**
 * Fetch products by category
 * @param {string} category - Product category
 * @returns {Promise} Promise containing products of the category
 */
export const getProductsByCategory = async (category) => {
  try {
    const response = await apiClient.get(`/products/category/${category}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching category ${category}:`, error);
    throw error;
  }
};

/**
 * Fetch all categories
 * @returns {Promise} Promise containing all categories
 */
export const getCategories = async () => {
  try {
    const response = await apiClient.get('/categories');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

/**
 * Login function
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise} Promise containing user data
 */
export const login = async (email, password) => {
  try {
    const response = await apiClient.post('/auth/login', { email, password });
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

/**
 * Register function
 * @param {string} email - User email
 * @param {string} password - User password
 * @param {string} name - User name
 * @returns {Promise} Promise containing user data
 */
export const register = async (email, password, name) => {
  try {
    const response = await apiClient.post('/auth/register', { email, password, name });
    return response.data;
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};

export default apiClient;
