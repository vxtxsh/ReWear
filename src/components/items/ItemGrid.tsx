import ItemCard from './ItemCard'

type Item = {
  id: string
  title: string
  image: string
  status: string
  points: number
}

export default function ItemGrid({ items }: { items: Item[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  )
} 