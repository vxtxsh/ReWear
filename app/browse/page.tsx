'use client'
import { useState } from 'react'
import AppLayout from '../../src/components/layout/AppLayout'
import ItemGrid from '../../src/components/items/ItemGrid'
import SearchBar from '../../src/components/common/SearchBar'
import Pagination from '../../src/components/common/Pagination'

const allItems = [
  {
    id: '1',
    title: 'Vintage Denim Jacket',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f',
    status: 'active',
    points: 40,
    size: 'M',
    years: 2,
    featured: true,
  },
  {
    id: '2',
    title: 'Classic White Sneakers',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
    status: 'active',
    points: 30,
    size: '9',
    years: 1,
    featured: true,
  },
  {
    id: '3',
    title: 'Floral Summer Dress',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c',
    status: 'active',
    points: 35,
    size: 'S',
    years: 3,
    featured: false,
  },
  {
    id: '4',
    title: 'Leather Boots',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
    status: 'active',
    points: 50,
    size: '8',
    years: 4,
    featured: false,
  },
  {
    id: '5',
    title: 'Striped T-Shirt',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
    status: 'active',
    points: 20,
    size: 'L',
    years: 1,
    featured: false,
  },
  {
    id: '6',
    title: 'Wool Scarf',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f',
    status: 'active',
    points: 15,
    size: 'One Size',
    years: 2,
    featured: false,
  },
]

export default function BrowsePage() {
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const itemsPerPage = 4

  const filtered = allItems.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase())
  )
  const totalPages = Math.ceil(filtered.length / itemsPerPage)
  const paged = filtered.slice((page - 1) * itemsPerPage, page * itemsPerPage)

  const featuredItems = allItems.filter(item => item.featured)

  return (
    <AppLayout>
      <h1 className="text-3xl font-bold mb-6">Browse Items</h1>
      {/* Featured Carousel */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Featured</h2>
        <div className="flex gap-6 overflow-x-auto pb-2 hide-scrollbar">
          {featuredItems.map(item => (
            <div key={item.id} className="min-w-[220px] max-w-xs flex-shrink-0">
              <div className="card p-0">
                <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-t-xl" />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1 truncate">{item.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                    <span className="bg-gray-100 rounded px-2 py-0.5">Size: {item.size}</span>
                    <span className="bg-gray-100 rounded px-2 py-0.5">{item.years} yrs old</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-green-600">{item.points} pts</span>
                    <a href={`/browse/${item.id}`} className="btn-secondary py-1 px-3 text-xs">View</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SearchBar onSearch={setQuery} placeholder="Search items..." />
      <ItemGrid items={paged} />
      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </AppLayout>
  )
} 