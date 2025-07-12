export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center py-8" role="status" aria-label="Loading">
      <div className="w-8 h-8 border-4 border-primary-600 border-t-transparent rounded-full animate-spin" />
      <span className="sr-only">Loading...</span>
    </div>
  )
} 