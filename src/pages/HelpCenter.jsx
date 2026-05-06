/**
 * Help Center Page
 * Comprehensive help and support documentation
 */
export default function HelpCenter() {
  const categories = [
    {
      title: 'Getting Started',
      icon: '🚀',
      articles: [
        { title: 'Creating Your Account', slug: 'create-account' },
        { title: 'How to Browse Products', slug: 'browse-products' },
        { title: 'Product Search Tips', slug: 'search-tips' },
        { title: 'Using Filters and Sort', slug: 'filters-sort' },
      ]
    },
    {
      title: 'Shopping & Cart',
      icon: '🛒',
      articles: [
        { title: 'Adding Items to Cart', slug: 'add-to-cart' },
        { title: 'Managing Your Cart', slug: 'manage-cart' },
        { title: 'Wish List Features', slug: 'wish-list' },
        { title: 'Product Comparisons', slug: 'compare-products' },
      ]
    },
    {
      title: 'Checkout & Payment',
      icon: '💳',
      articles: [
        { title: 'Checkout Process', slug: 'checkout-process' },
        { title: 'Payment Methods', slug: 'payment-methods' },
        { title: 'Applying Discount Codes', slug: 'discount-codes' },
        { title: 'Order Confirmation', slug: 'order-confirmation' },
      ]
    },
    {
      title: 'Account & Security',
      icon: '🔐',
      articles: [
        { title: 'Managing Your Profile', slug: 'profile-settings' },
        { title: 'Password & Security', slug: 'password-security' },
        { title: 'Privacy Settings', slug: 'privacy-settings' },
        { title: 'Two-Factor Authentication', slug: 'two-factor' },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container-main">
          <h1 className="text-5xl font-bold mb-4">Help Center</h1>
          <p className="text-xl text-blue-100">
            Find answers to your questions and get support
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white shadow-md py-8 sticky top-20 z-40">
        <div className="container-main">
          <div className="max-w-2xl">
            <input
              type="text"
              placeholder="Search for help articles..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-main py-16">
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              {/* Category Header */}
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6">
                <div className="text-4xl mb-2">{category.icon}</div>
                <h2 className="text-2xl font-bold">{category.title}</h2>
              </div>

              {/* Articles List */}
              <div className="p-6">
                <ul className="space-y-3">
                  {category.articles.map((article, idx) => (
                    <li key={idx}>
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-2 font-medium"
                      >
                        <span>→</span>
                        {article.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-12 text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Our support team is here to help you. Reach out anytime.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/contact" className="btn-primary bg-white text-blue-600 hover:bg-gray-100">
              Contact Support
            </a>
            <a href="#" className="btn-secondary bg-blue-700 text-white border-blue-700 hover:bg-blue-600">
              Live Chat
            </a>
          </div>
        </div>

        {/* Popular Articles */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Popular Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'How to Reset Your Password', views: '2,341' },
              { title: 'Track Your Order', views: '1,892' },
              { title: 'Return an Item', views: '1,654' },
            ].map((article, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">📄</span>
                  <span className="text-gray-500 text-sm">{article.views} views</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 hover:text-blue-600 transition">
                  {article.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
