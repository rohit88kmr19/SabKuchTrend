/**
 * Shipping Info Page
 * Comprehensive shipping information and rates
 */
export default function ShippingInfo() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="container-main">
          <h1 className="text-5xl font-bold mb-4">Shipping Information</h1>
          <p className="text-xl text-green-100">
            Fast, reliable delivery to your doorstep
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-main py-16">
        {/* Shipping Options */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Shipping Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Standard Shipping */}
            <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-blue-500">
              <div className="text-3xl mb-4">📦</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Standard Shipping</h3>
              <p className="text-gray-600 mb-4">
                Reliable delivery for everyday purchases
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Delivery Time:</strong> 5-7 business days</p>
                <p><strong>Cost:</strong> $5.99</p>
                <p><strong>Free On:</strong> Orders over $50</p>
              </div>
            </div>

            {/* Express Shipping */}
            <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-orange-500 ring-2 ring-orange-200">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Express Shipping</h3>
              <p className="text-gray-600 mb-4">
                Fast delivery for urgent orders
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Delivery Time:</strong> 2-3 business days</p>
                <p><strong>Cost:</strong> $12.99</p>
                <p><strong>Free On:</strong> Orders over $100</p>
              </div>
              <span className="inline-block mt-4 bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                Popular Choice
              </span>
            </div>

            {/* Overnight Shipping */}
            <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-red-500">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Overnight Shipping</h3>
              <p className="text-gray-600 mb-4">
                Next day delivery available
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Delivery Time:</strong> Next business day</p>
                <p><strong>Cost:</strong> $24.99</p>
                <p><strong>Available In:</strong> Major cities only</p>
              </div>
            </div>
          </div>
        </section>

        {/* Shipping FAQs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Shipping FAQs</h2>
          <div className="space-y-6">
            {[
              {
                question: 'How are shipping costs calculated?',
                answer: 'Shipping costs are based on your location, the weight of your order, and the shipping method you choose. Most orders qualify for free standard shipping when they exceed $50.'
              },
              {
                question: 'Can I change my shipping address after ordering?',
                answer: 'Yes, if your order hasn\'t shipped yet. Contact our support team immediately with your new address. We\'ll do our best to update it before it goes out.'
              },
              {
                question: 'Do you ship internationally?',
                answer: 'Currently, we ship to most countries in North America and Europe. International shipping typically takes 2-4 weeks. Custom duties and taxes may apply.'
              },
              {
                question: 'How can I track my order?',
                answer: 'You\'ll receive a tracking number via email once your order ships. You can use this number to track your package in real-time on our website or through the shipping carrier\'s site.'
              },
              {
                question: 'What if my package is lost or damaged?',
                answer: 'Report any issues within 48 hours of delivery. We\'ll investigate and either send a replacement or process a full refund. All packages are insured against loss and damage.'
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Q: {faq.question}</h3>
                <p className="text-gray-700">A: {faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Delivery Coverage Map */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Delivery Coverage</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center mb-6">
              <div className="text-center">
                <div className="text-6xl mb-4">🌍</div>
                <p className="text-gray-600 text-lg font-semibold">
                  We deliver to 150+ countries worldwide
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="font-bold text-2xl text-green-600">150+</p>
                <p className="text-gray-600">Countries</p>
              </div>
              <div>
                <p className="font-bold text-2xl text-green-600">48hrs</p>
                <p className="text-gray-600">Avg Processing</p>
              </div>
              <div>
                <p className="font-bold text-2xl text-green-600">99.8%</p>
                <p className="text-gray-600">On-Time Delivery</p>
              </div>
              <div>
                <p className="font-bold text-2xl text-green-600">24/7</p>
                <p className="text-gray-600">Tracking Support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Shipping Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: '✓',
                title: 'Order Early for Holidays',
                description: 'During peak seasons, order earlier to ensure on-time delivery.'
              },
              {
                icon: '✓',
                title: 'Provide Accurate Address',
                description: 'Double-check your shipping address to avoid delivery delays.'
              },
              {
                icon: '✓',
                title: 'Track Your Package',
                description: 'Use tracking numbers to monitor your delivery progress.'
              },
              {
                icon: '✓',
                title: 'Sign Up for Notifications',
                description: 'Get SMS and email updates about your shipment status.'
              },
            ].map((tip, idx) => (
              <div key={idx} className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <span className="text-green-600 text-2xl">{tip.icon}</span>
                  {tip.title}
                </h3>
                <p className="text-gray-700">{tip.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
