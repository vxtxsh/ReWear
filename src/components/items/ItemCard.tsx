type Item = {
  id: string
  title: string
  image: string
  status: string
  points: number
  size?: string
  years?: number
}

export default function ItemCard({ item }: { item: Item }) {
  return (
    <div
      tabIndex={0}
      role="group"
      aria-label={item.title}
      className="card group cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl focus:shadow-2xl focus:-translate-y-2 outline-none"
    >
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110 group-focus:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
            item.status === 'active' 
              ? 'bg-green-500/90 text-white' 
              : 'bg-gray-500/90 text-white'
          }`}>
            {item.status === 'active' ? 'Available' : item.status}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="font-bold text-xl mb-2 text-gray-800 group-hover:text-green-600 group-focus:text-green-600 transition-colors line-clamp-1">
          {item.title}
        </h3>
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
          {item.size && <span className="bg-gray-100 rounded px-2 py-0.5">Size: {item.size}</span>}
          {item.years !== undefined && <span className="bg-gray-100 rounded px-2 py-0.5">{item.years} yrs old</span>}
        </div>
        <div className="flex items-center justify-between mb-4">
          <span className="font-bold text-green-600 text-lg">{item.points} pts</span>
        </div>
        <button
          className="w-full btn-primary py-2 text-sm"
          tabIndex={0}
          aria-label={`Swap for ${item.title}`}
        >
          Request Swap
        </button>
      </div>
    </div>
  )
} 