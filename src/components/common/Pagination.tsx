type Props = {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination({ page, totalPages, onPageChange }: Props) {
  return (
    <nav className="flex justify-center items-center gap-2 mt-6" aria-label="Pagination">
      <button
        className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50 hover:bg-primary-100 focus:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-400 transition"
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        aria-label="Previous page"
      >
        Prev
      </button>
      <span className="font-medium">
        Page {page} of {totalPages}
      </span>
      <button
        className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50 hover:bg-primary-100 focus:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-400 transition"
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        aria-label="Next page"
      >
        Next
      </button>
    </nav>
  )
} 