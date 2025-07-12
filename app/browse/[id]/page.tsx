'use client'
import { useState } from 'react'
import AppLayout from '../../../src/components/layout/AppLayout'

export default function ItemDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [showDeal, setShowDeal] = useState(false)
  const [proposedPoints, setProposedPoints] = useState(0)
  const [dealSent, setDealSent] = useState(false)

  // In a real app, fetch item by ID from params
  const item = {
    id: '1',
    title: 'Vintage Denim Jacket',
    images: [
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f',
      'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef',
      'https://images.unsplash.com/photo-1516762689617-e1cffcef479d',
    ],
    status: 'active',
    points: 40,
    years: 2,
    description: 'A classic vintage denim jacket in excellent condition. Perfect for layering in any season. This timeless piece features traditional button closure, two chest pockets, and a comfortable fit.',
    tags: ['denim', 'jacket', 'vintage', 'unisex'],
    size: 'Medium',
    condition: 'Excellent',
    brand: 'Levi\'s',
    owner: {
      name: 'Jane Doe',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      swaps: 23,
    }
  }

  const handleDeal = (e: React.FormEvent) => {
    e.preventDefault()
    setDealSent(true)
    setTimeout(() => {
      setShowDeal(false)
      setDealSent(false)
    }, 2000)
  }

  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <img
                src={item.images[selectedImage]}
                alt={item.title}
                className="w-full h-[500px] object-cover transition-all duration-300"
              />
              <div className="absolute top-4 right-4">
                <button 
                  className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
                  aria-label="Add to favorites"
                  title="Add to favorites"
                >
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-4">
              {item.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${item.title} ${idx + 1}`}
                  className={`w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-all duration-200 ${selectedImage === idx ? 'ring-4 ring-green-500 shadow-lg' : 'opacity-70'}`}
                  onClick={() => setSelectedImage(idx)}
                />
              ))}
            </div>
          </div>

          {/* Item Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between mb-4">
                <h1 className="text-4xl font-bold text-gray-900">{item.title}</h1>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  item.status === 'active' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-gray-100 text-gray-700'
                }`}>
                  {item.status === 'active' ? 'Available' : item.status}
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                <span className="bg-gray-100 rounded px-2 py-0.5">Size: {item.size}</span>
                <span className="bg-gray-100 rounded px-2 py-0.5">{item.years} yrs old</span>
                <span className="bg-gray-100 rounded px-2 py-0.5">{item.owner.swaps} swaps</span>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-5xl font-bold text-gradient">{item.points}</span>
                <span className="text-xl text-gray-600">points</span>
              </div>
            </div>

            <div className="space-y-4 pb-6 border-b">
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-sm text-gray-500">Size</span>
                  <p className="font-semibold">{item.size}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Condition</span>
                  <p className="font-semibold">{item.condition}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Brand</span>
                  <p className="font-semibold">{item.brand}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Category</span>
                  <p className="font-semibold">Outerwear</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <span key={tag} className="bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1 text-sm cursor-pointer transition-colors">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Owner Info */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <img
                  src={item.owner.avatar}
                  alt={item.owner.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{item.owner.name}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>{item.owner.swaps} swaps</span>
                  </div>
                </div>
              </div>
              <button className="text-green-600 hover:text-green-700 font-medium">
                View Profile
              </button>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-3 gap-4">
              <button className="btn-primary text-lg py-3">
                Request Swap
              </button>
              <button className="btn-secondary text-lg py-3">
                Redeem with Points
              </button>
              <button className="btn-secondary text-lg py-3" onClick={() => setShowDeal(true)}>
                Negotiate Deal
              </button>
            </div>
            {/* Negotiate Modal */}
            {showDeal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-sm animate-scale-in">
                  <h3 className="text-xl font-bold mb-4">Propose a Deal</h3>
                  <form onSubmit={handleDeal} className="space-y-4">
                    <div>
                      <label htmlFor="proposed-points" className="block text-sm font-medium text-gray-700 mb-2">Proposed Points Value</label>
                      <input
                        id="proposed-points"
                        type="number"
                        className="input"
                        min={1}
                        max={item.points}
                        value={proposedPoints}
                        onChange={e => setProposedPoints(Number(e.target.value))}
                        required
                      />
                    </div>
                    <div className="flex gap-2">
                      <button type="submit" className="btn-primary flex-1" disabled={dealSent}>
                        {dealSent ? 'Sent!' : 'Send Offer'}
                      </button>
                      <button type="button" className="btn-secondary flex-1" onClick={() => setShowDeal(false)} disabled={dealSent}>
                        Cancel
                      </button>
                    </div>
                  </form>
                  {dealSent && <p className="text-green-600 mt-4 text-center">Offer sent to swapper!</p>}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Similar Items */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Similar Items</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="card group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-${1500000000000 + i * 1000}?w=300&h=300&fit=crop`}
                    alt="Similar item"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1">Similar Item {i}</h3>
                  <p className="text-green-600 font-bold">30 points</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  )
} 