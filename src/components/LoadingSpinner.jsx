/**
 * Loading Spinner Component
 * Displays a loading animation while data is being fetched
 */
export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col items-center">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
        <p className="text-gray-600 text-lg font-semibold">Loading products...</p>
      </div>
    </div>
  );
}
