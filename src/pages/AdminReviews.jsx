import { useAdmin } from '../context/AdminContext';
import AdminNavbar from '../components/AdminNavbar';

/**
 * Admin Reviews Page
 * Displays all customer reviews for all products
 */
export default function AdminReviews() {
  const { reviews, products, deleteReview, approveReview, rejectReview } = useAdmin();

  // Get product name by ID
  const getProductName = (productId) => {
    const product = products.find((p) => p.id === productId);
    return product?.title || 'Unknown Product';
  };

  // Handle delete review
  const handleDeleteReview = async (reviewId) => {
    if (window.confirm('Are you sure you want to delete this review?')) {
      await deleteReview(reviewId);
      alert('Review deleted successfully!');
    }
  };

  // Handle approve review
  const handleApproveReview = async (reviewId) => {
    await approveReview(reviewId);
    alert('Review approved successfully!');
  };

  // Handle reject review
  const handleRejectReview = async (reviewId) => {
    if (window.confirm('Are you sure you want to reject this review?')) {
      await rejectReview(reviewId);
      alert('Review rejected successfully!');
    }
  };

  const getApprovalBadge = (isApproved) => {
    if (isApproved === true) {
      return <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">✓ Approved</span>;
    } else if (isApproved === false) {
      return <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-semibold">✗ Rejected</span>;
    } else {
      return <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold">⏳ Pending</span>;
    }
  };

  const getActionButtons = (review) => {
    // If approved: only show Delete button
    if (review.isApproved === true) {
      return (
        <button
          onClick={() => handleDeleteReview(review.id)}
          className="text-red-600 hover:text-red-800 font-semibold transition"
          title="Delete Review"
        >
          🗑️ Delete
        </button>
      );
    }
    
    // If rejected: only show Delete button
    if (review.isApproved === false) {
      return (
        <button
          onClick={() => handleDeleteReview(review.id)}
          className="text-red-600 hover:text-red-800 font-semibold transition"
          title="Delete Review"
        >
          🗑️ Delete
        </button>
      );
    }
    
    // If pending: show Approve, Reject, and Delete buttons
    return (
      <div className="flex gap-2">
        <button
          onClick={() => handleApproveReview(review.id)}
          className="text-green-600 hover:text-green-800 font-semibold transition"
          title="Approve Review"
        >
          ✓ Approve
        </button>
        <button
          onClick={() => handleRejectReview(review.id)}
          className="text-orange-600 hover:text-orange-800 font-semibold transition"
          title="Reject Review"
        >
          ✗ Reject
        </button>
        <button
          onClick={() => handleDeleteReview(review.id)}
          className="text-red-600 hover:text-red-800 font-semibold transition"
          title="Delete Review"
        >
          🗑️ Delete
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNavbar />

      {/* Main Content */}
      <div className="container-main py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Customer Reviews</h1>
          <p className="text-gray-600">Total Reviews: {reviews.length}</p>
        </div>

        {/* Reviews Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {reviews.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-gray-500 text-lg">No reviews yet</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100 border-b border-gray-300">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">ID</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Product</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Author</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Rating</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Comment</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Date</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Status</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {reviews.map((review, index) => (
                    <tr
                      key={review.id}
                      className={`border-b border-gray-200 ${
                        index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                      } hover:bg-gray-100 transition`}
                    >
                      <td className="px-6 py-4 text-sm text-gray-800">{review.id}</td>
                      <td className="px-6 py-4 text-sm text-gray-800 font-medium">
                        {getProductName(review.productId)}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800">{review.author}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className="text-yellow-500 text-lg">
                          {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 max-w-xs truncate">
                        {review.comment}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {new Date(review.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        {getApprovalBadge(review.isApproved)}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        {getActionButtons(review)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Summary Stats */}
        {reviews.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Average Rating */}
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-yellow-500">
              <div className="text-center">
                <p className="text-gray-600 text-sm font-semibold mb-2">Average Rating</p>
                <p className="text-3xl font-bold text-yellow-500">
                  {(reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)}
                </p>
                <p className="text-gray-500 text-sm mt-2">out of 5 stars</p>
              </div>
            </div>

            {/* 5-Star Reviews */}
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-500">
              <div className="text-center">
                <p className="text-gray-600 text-sm font-semibold mb-2">5-Star Reviews</p>
                <p className="text-3xl font-bold text-green-500">
                  {reviews.filter((r) => r.rating === 5).length}
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  {(
                    (reviews.filter((r) => r.rating === 5).length / reviews.length) *
                    100
                  ).toFixed(0)}
                  %
                </p>
              </div>
            </div>

            {/* 1-Star Reviews */}
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-red-500">
              <div className="text-center">
                <p className="text-gray-600 text-sm font-semibold mb-2">1-Star Reviews</p>
                <p className="text-3xl font-bold text-red-500">
                  {reviews.filter((r) => r.rating === 1).length}
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  {(
                    (reviews.filter((r) => r.rating === 1).length / reviews.length) *
                    100
                  ).toFixed(0)}
                  %
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
