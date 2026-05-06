/**
 * Returns Page
 * Returns and refund policy information
 */
export default function Returns() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="container-main">
          <h1 className="text-5xl font-bold mb-4">Returns & Refunds</h1>
          <p className="text-xl text-purple-100">
            Hassle-free returns within 30 days
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-main py-16">
        {/* Return Policy Overview */}
        <section className="bg-white rounded-lg shadow-md p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Return Policy</h2>
          <div className="space-y-4">
            <p className="text-gray-700 text-lg">
              We want you to be completely satisfied with your purchase. If for any reason you're 
              not happy with your product, we make returns simple and hassle-free.
            </p>
            <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded">
              <p className="font-bold text-purple-900 mb-2">30-Day Return Window</p>
              <p className="text-purple-800">
                You have 30 days from the date of delivery to return any item for a full refund.
              </p>
            </div>
          </div>
        </section>

        {/* Return Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">How to Return Items</h2>
          <div className="space-y-4">
            {[
              {
                step: 1,
                title: 'Initiate Return',
                description: 'Go to your order in "My Orders" and click "Return Item". Select the reason and complete the return request.'
              },
              {
                step: 2,
                title: 'Pack Your Item',
                description: 'Securely pack the item in its original packaging if possible. Include any accessories that came with it.'
              },
              {
                step: 3,
                title: 'Ship It Back',
                description: 'Print the prepaid shipping label from your account. Drop off your package at any authorized shipping location.'
              },
              {
                step: 4,
                title: 'Get Your Refund',
                description: 'Once we receive and inspect your item, we\'ll process your refund within 5-7 business days.'
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-purple-600 text-white font-bold text-lg">
                    {item.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Return Conditions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Return Conditions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Eligible */}
            <div className="bg-green-50 rounded-lg p-8 border border-green-200">
              <h3 className="text-2xl font-bold text-green-800 mb-6">✓ Eligible for Return</h3>
              <ul className="space-y-3">
                <li className="text-green-700">Items within 30 days of purchase</li>
                <li className="text-green-700">Unused and in original packaging</li>
                <li className="text-green-700">All accessories included</li>
                <li className="text-green-700">Items with valid receipt/order confirmation</li>
                <li className="text-green-700">Defective or damaged items (anytime)</li>
              </ul>
            </div>

            {/* Not Eligible */}
            <div className="bg-red-50 rounded-lg p-8 border border-red-200">
              <h3 className="text-2xl font-bold text-red-800 mb-6">✗ Not Eligible for Return</h3>
              <ul className="space-y-3">
                <li className="text-red-700">Items returned after 30 days</li>
                <li className="text-red-700">Used or damaged items</li>
                <li className="text-red-700">Items missing original packaging</li>
                <li className="text-red-700">Missing accessories or parts</li>
                <li className="text-red-700">Custom or personalized items</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Refund Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Refund Timeline</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-24 font-bold text-purple-600">Step 1</div>
                <div className="flex-grow">
                  <p className="font-semibold text-gray-800">Return Initiated</p>
                  <p className="text-gray-600">You request a return through your account</p>
                </div>
                <div className="text-sm font-semibold text-gray-500">Immediate</div>
              </div>
              <hr />
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-24 font-bold text-purple-600">Step 2</div>
                <div className="flex-grow">
                  <p className="font-semibold text-gray-800">Package Shipped</p>
                  <p className="text-gray-600">You ship the item back to us using prepaid label</p>
                </div>
                <div className="text-sm font-semibold text-gray-500">5-7 Days</div>
              </div>
              <hr />
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-24 font-bold text-purple-600">Step 3</div>
                <div className="flex-grow">
                  <p className="font-semibold text-gray-800">Item Received</p>
                  <p className="text-gray-600">We receive and inspect your return</p>
                </div>
                <div className="text-sm font-semibold text-gray-500">1-2 Days</div>
              </div>
              <hr />
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-24 font-bold text-purple-600">Step 4</div>
                <div className="flex-grow">
                  <p className="font-semibold text-gray-800">Refund Processed</p>
                  <p className="text-gray-600">Your refund is credited back to original payment method</p>
                </div>
                <div className="text-sm font-semibold text-gray-500">5-7 Days</div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <p className="text-blue-900">
                <strong>Total Time:</strong> 15-21 days from initiation to refund appearance in your account
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Return FAQs</h2>
          <div className="space-y-6">
            {[
              {
                question: 'Can I return an item without a receipt?',
                answer: 'Yes, as long as you have your order confirmation email or order number from our website.'
              },
              {
                question: 'Is return shipping free?',
                answer: 'Yes! We provide a prepaid return shipping label for all eligible returns. There are no additional shipping costs.'
              },
              {
                question: 'What if the item is defective?',
                answer: 'Defective items can be returned anytime, even after 30 days. Contact our support team with photos of the defect.'
              },
              {
                question: 'Can I exchange items instead of returning?',
                answer: 'Yes! You can request an exchange during the return process. We\'ll ship the replacement before receiving your return.'
              },
              {
                question: 'When will I see the refund?',
                answer: 'Refunds typically appear within 5-7 business days after we process your return. Some banks may take 1-2 additional days.'
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Q: {faq.question}</h3>
                <p className="text-gray-700">A: {faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Support */}
        <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help with Your Return?</h2>
          <p className="text-purple-100 mb-8 text-lg">
            Our support team is ready to assist you with any questions about returns.
          </p>
          <a href="/contact" className="btn-primary bg-white text-purple-600 hover:bg-gray-100 inline-block">
            Contact Support
          </a>
        </section>
      </div>
    </div>
  );
}
