/**
 * About Us Page
 * Professional company information page
 */
export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container-main">
          <h1 className="text-5xl font-bold mb-4">About ShopHub</h1>
          <p className="text-xl text-blue-100">
            Your trusted partner in online shopping since 2020
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-main py-16">
        {/* Our Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            SabKuch Trend was founded in 2020 with a simple mission: to revolutionize online shopping 
            by providing customers with an exceptional selection of high-quality products at 
            competitive prices. What started as a small startup has grown into a leading 
            e-commerce platform serving thousands of customers worldwide.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            We believe that online shopping should be easy, convenient, and enjoyable. Our 
            dedicated team works tirelessly to ensure that every customer has a seamless 
            experience from browsing to checkout, with exceptional customer service at every step.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Today, ShopHub is proud to offer a diverse range of products across multiple categories, 
            including electronics, fashion, home goods, and much more. Our commitment to quality 
            and customer satisfaction remains unwavering.
          </p>
        </section>

        {/* Mission, Vision, Values */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Mission */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To provide customers with the widest selection of quality products at unbeatable 
              prices, delivered with exceptional service and reliability.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the world's most customer-centric online shopping platform, where people 
              can find and discover anything they want to buy online.
            </p>
          </div>

          {/* Values */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-4xl mb-4">💎</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Values</h3>
            <p className="text-gray-600">
              Customer-first approach, integrity, innovation, and excellence in everything 
              we do. We believe in building trust through transparency and quality.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose ShopHub?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Wide Product Selection</h3>
                <p className="text-gray-600">
                  Thousands of products across multiple categories, all carefully curated 
                  for quality and value.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Competitive Pricing</h3>
                <p className="text-gray-600">
                  We offer the best prices in the market with regular discounts and 
                  special offers for our valued customers.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Fast & Reliable Shipping</h3>
                <p className="text-gray-600">
                  We partner with leading logistics providers to ensure your orders arrive 
                  on time, every time.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">24/7 Customer Support</h3>
                <p className="text-gray-600">
                  Our dedicated support team is always ready to help you with any questions 
                  or concerns you may have.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Secure Payment</h3>
                <p className="text-gray-600">
                  Your payment information is protected with industry-leading encryption 
                  and security protocols.
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Easy Returns</h3>
                <p className="text-gray-600">
                  Not satisfied? Return or exchange your items hassle-free within 30 days 
                  of purchase.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="bg-blue-600 text-white rounded-lg p-12 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">ShopHub by Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500K+</div>
              <p className="text-blue-100">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <p className="text-blue-100">Products Available</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <p className="text-blue-100">Countries Served</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.8%</div>
              <p className="text-blue-100">Customer Satisfaction</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
              <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-32 flex items-center justify-center">
                <div className="text-5xl">👨‍💼</div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-1">John Smith</h3>
                <p className="text-blue-600 font-semibold mb-3">CEO & Founder</p>
                <p className="text-gray-600 text-sm">
                  Visionary leader with 15+ years in e-commerce industry.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
              <div className="bg-gradient-to-r from-green-400 to-green-600 h-32 flex items-center justify-center">
                <div className="text-5xl">👩‍💼</div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-1">Sarah Johnson</h3>
                <p className="text-green-600 font-semibold mb-3">CTO</p>
                <p className="text-gray-600 text-sm">
                  Tech innovator leading our platform development.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
              <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-32 flex items-center justify-center">
                <div className="text-5xl">👨‍💼</div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-1">Michael Chen</h3>
                <p className="text-purple-600 font-semibold mb-3">COO</p>
                <p className="text-gray-600 text-sm">
                  Operations expert ensuring smooth business execution.
                </p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
              <div className="bg-gradient-to-r from-pink-400 to-pink-600 h-32 flex items-center justify-center">
                <div className="text-5xl">👩‍💼</div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-1">Emma Davis</h3>
                <p className="text-pink-600 font-semibold mb-3">Customer Success</p>
                <p className="text-gray-600 text-sm">
                  Dedicated to delivering exceptional customer experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Join ShopHub Community</h2>
          <p className="text-xl text-blue-100 mb-8">
            Become part of millions of satisfied customers enjoying quality products 
            and exceptional service.
          </p>
          <a href="/" className="btn-primary bg-white text-blue-600 hover:bg-gray-100">
            Start Shopping Now
          </a>
        </section>
      </div>
    </div>
  );
}
