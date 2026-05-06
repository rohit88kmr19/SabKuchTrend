/**
 * ErrorMessage Component
 * Displays error messages in a user-friendly format
 * @param {string} message - Error message to display
 * @param {Function} onRetry - Optional callback for retry button
 */
export default function ErrorMessage({ message, onRetry }) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center max-w-md">
        {/* Error Icon */}
        <div className="text-4xl mb-4">⚠️</div>

        {/* Error Title */}
        <h2 className="text-xl font-bold text-red-800 mb-2">
          Oops! Something went wrong
        </h2>

        {/* Error Message */}
        <p className="text-red-700 mb-6">
          {message || 'An error occurred while loading the content. Please try again.'}
        </p>

        {/* Retry Button */}
        {onRetry && (
          <button
            onClick={onRetry}
            className="btn-primary"
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  );
}
