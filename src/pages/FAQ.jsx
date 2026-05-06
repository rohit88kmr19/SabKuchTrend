/**
 * FAQ Page
 * Frequently asked questions
 */
import { useState } from 'react';

export default function FAQ() {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const faqCategories = [
    {
      title: 'Account & Registration',
      icon: '👤',
      color: 'from-blue-400 to-blue-600',
      items: [
        {
          id: 'acc1',
          question: 'How do I create an account?',
          answer: 'Click on the "Login" button in the top right corner, then click "Register here". Fill in your email, name, and password. Once you confirm your email, your account is ready to use!'
        },
        {
          id: 'acc2',
          question: 'Can I have multiple accounts?',
          answer: 'Each person should have their own account with a unique email address. We recommend one account per user for the best experience.'
        },
        {
          id: 'acc3',
          question: 'How do I reset my password?',
          answer: 'Go to the login page and click "Forgot password?". Enter your email address and we\'ll send you a link to reset your password.'
        },
        {
          id: 'acc4',
          question: 'How do I update my profile information?',
          answer: 'Log in to your account and go to Account Settings. You can update your name, email, phone number, and addresses anytime.'
        },
      ]
    },
    {
      title: 'Ordering & Shopping',
      icon: '🛒',
      color: 'from-green-400 to-green-600',
      items: [
        {
          id: 'ord1',
          question: 'How do I place an order?',
          answer: 'Browse products, click "Add to Cart", review your cart, and proceed to checkout. Enter your shipping and payment information to complete your order.'
        },
        {
          id: 'ord2',
          question: 'Can I save items for later?',
          answer: 'Yes! Click the heart icon on any product to add it to your Wishlist. You can view and purchase wishlist items anytime from your account.'
        },
        {
          id: 'ord3',
          question: 'How can I apply a discount code?',
          answer: 'During checkout, look for the "Promo Code" field before payment. Enter your code and click "Apply". The discount will be applied to your order total.'
        },
        {
          id: 'ord4',
          question: 'Is there a minimum order amount?',
          answer: 'No minimum purchase required! However, orders under $25 may have a small shipping fee. Free shipping applies to all orders over $50.'
        },
      ]
    },
    {
      title: 'Payment & Security',
      icon: '💳',
      color: 'from-red-400 to-red-600',
      items: [
        {
          id: 'pay1',
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers.'
        },
        {
          id: 'pay2',
          question: 'Is my payment information secure?',
          answer: 'Yes! All transactions are encrypted using SSL technology and comply with PCI DSS security standards. Your data is never stored on our servers.'
        },
        {
          id: 'pay3',
          question: 'Will I be charged multiple times?',
          answer: 'No, you\'ll only be charged once when you complete your order. If you see multiple charges, contact your bank and our support team.'
        },
        {
          id: 'pay4',
          question: 'Do you offer installment payments?',
          answer: 'Yes! For orders over $100, you can split your payment into 3 or 6 monthly installments with selected payment providers.'
        },
      ]
    },
    {
      title: 'Shipping & Delivery',
      icon: '📦',
      color: 'from-purple-400 to-purple-600',
      items: [
        {
          id: 'ship1',
          question: 'How much does shipping cost?',
          answer: 'Standard shipping is $5.99 (free on orders over $50). Express shipping is $12.99 (free on orders over $100). See our Shipping Info page for more details.'
        },
        {
          id: 'ship2',
          question: 'How long does delivery take?',
          answer: 'Standard shipping takes 5-7 business days, Express takes 2-3 days, and Overnight is available the next business day in major cities.'
        },
        {
          id: 'ship3',
          question: 'Can I track my order?',
          answer: 'Yes! You\'ll receive a tracking number via email once your order ships. Use it to track your package in real-time on our website or the carrier\'s site.'
        },
        {
          id: 'ship4',
          question: 'Do you ship internationally?',
          answer: 'Yes, we ship to 150+ countries. International shipping typically takes 2-4 weeks. Customs duties and taxes may apply.'
        },
      ]
    },
    {
      title: 'Returns & Refunds',
      icon: '↩️',
      color: 'from-yellow-400 to-yellow-600',
      items: [
        {
          id: 'ret1',
          question: 'What\'s your return policy?',
          answer: 'We offer a 30-day return policy on most items. Products must be in original condition and packaging. See our Returns page for complete details.'
        },
        {
          id: 'ret2',
          question: 'How do I return an item?',
          answer: 'Go to My Orders, select the item, and click "Return Item". We\'ll email you a prepaid return label. Ship the item back and we\'ll process your refund.'
        },
        {
          id: 'ret3',
          question: 'Is return shipping free?',
          answer: 'Yes, all eligible returns include free prepaid shipping. There are no additional costs for returning items.'
        },
        {
          id: 'ret4',
          question: 'When will I get my refund?',
          answer: 'Refunds are processed within 5-7 business days after we receive your return. The funds appear in your account 1-2 days later depending on your bank.'
        },
      ]
    },
    {
      title: 'Products & Categories',
      icon: '📱',
      color: 'from-pink-400 to-pink-600',
      items: [
        {
          id: 'prod1',
          question: 'How can I search for specific products?',
          answer: 'Use the search bar at the top of the site or visit our Products page. You can filter by category, sort by price/rating, and search by keywords.'
        },
        {
          id: 'prod2',
          question: 'How often are products updated?',
          answer: 'We add new products daily! Check back regularly to see the latest arrivals, or subscribe to our newsletter for updates.'
        },
        {
          id: 'prod3',
          question: 'Are products authentic?',
          answer: 'Yes, 100% authentic. All our products come directly from official manufacturers or authorized distributors with authenticity guarantees.'
        },
        {
          id: 'prod4',
          question: 'What if a product is out of stock?',
          answer: 'You can click "Notify Me" on the product page to get an email when it\'s back in stock. Or check back soon - we restock regularly.'
        },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-16">
        <div className="container-main">
          <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-indigo-100">
            Find answers to common questions about shopping with ShopHub
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white shadow-md py-8 sticky top-20 z-40">
        <div className="container-main">
          <input
            type="text"
            placeholder="Search FAQs..."
            className="w-full max-w-2xl px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="container-main py-16">
        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, catIdx) => (
            <div key={catIdx}>
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.color} text-white rounded-t-lg p-6 flex items-center gap-4`}>
                <span className="text-4xl">{category.icon}</span>
                <h2 className="text-2xl font-bold">{category.title}</h2>
              </div>

              {/* FAQ Items */}
              <div className="bg-white rounded-b-lg shadow-md overflow-hidden">
                {category.items.map((item, itemIdx) => (
                  <div key={item.id} className={itemIdx !== category.items.length - 1 ? 'border-b border-gray-200' : ''}>
                    <button
                      onClick={() => toggleExpand(item.id)}
                      className="w-full px-6 py-4 text-left hover:bg-gray-50 transition flex items-center justify-between group"
                    >
                      <span className="font-semibold text-gray-800 group-hover:text-indigo-600 transition">
                        {item.question}
                      </span>
                      <span className={`text-2xl text-gray-400 transition-transform ${expandedItems[item.id] ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </button>

                    {/* Answer */}
                    {expandedItems[item.id] && (
                      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                        <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Still Need Help */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
          <p className="text-indigo-100 mb-8 text-lg">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/contact" className="btn-primary bg-white text-indigo-600 hover:bg-gray-100">
              Contact Support
            </a>
            <a href="/help-center" className="btn-secondary bg-indigo-700 text-white border-indigo-700 hover:bg-indigo-600">
              Visit Help Center
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
