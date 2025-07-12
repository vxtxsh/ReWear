'use client'
import { useState } from 'react'
import AppLayout from '../../src/components/layout/AppLayout'

const swaps = [
  {
    id: '1',
    myItem: {
      title: 'Vintage Denim Jacket',
      image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f',
      points: 40,
    },
    theirItem: {
      title: 'Leather Boots',
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
      points: 50,
    },
    status: 'pending',
    otherUser: {
      name: 'Alice Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      rating: 4.7,
    },
    createdAt: '2 days ago',
  },
  {
    id: '2',
    myItem: {
      title: 'Classic White Sneakers',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
      points: 30,
    },
    theirItem: {
      title: 'Striped T-Shirt',
      image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
      points: 20,
    },
    status: 'accepted',
    otherUser: {
      name: 'Bob Smith',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      rating: 4.9,
    },
    createdAt: '1 week ago',
  },
  {
    id: '3',
    myItem: {
      title: 'Floral Summer Dress',
      image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c',
      points: 35,
    },
    theirItem: {
      title: 'Wool Scarf',
      image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f',
      points: 15,
    },
    status: 'completed',
    otherUser: {
      name: 'Carol Davis',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      rating: 5.0,
    },
    createdAt: '2 weeks ago',
  },
]

export default function SwapsListPage() {
  const [filter, setFilter] = useState('all')
  
  const filteredSwaps = filter === 'all' 
    ? swaps 
    : swaps.filter(swap => swap.status === filter)

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'pending': return 'bg-yellow-100 text-yellow-700'
      case 'accepted': return 'bg-blue-100 text-blue-700'
      case 'completed': return 'bg-green-100 text-green-700'
      case 'rejected': return 'bg-red-100 text-red-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <AppLayout>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">My Swaps</h1>
          <p className="text-gray-600">Manage your ongoing and completed swaps</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {['all', 'pending', 'accepted', 'completed'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-6 py-2 rounded-lg font-medium capitalize transition-all ${
                filter === status
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
              }`}
            >
              {status}
              <span className="ml-2 text-sm opacity-80">
                ({swaps.filter(s => status === 'all' || s.status === status).length})
              </span>
            </button>
          ))}
        </div>

        {/* Swaps List */}
        <div className="space-y-6">
          {filteredSwaps.map(swap => (
            <div key={swap.id} className="card p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={swap.otherUser.avatar}
                    alt={swap.otherUser.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{swap.otherUser.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span>{swap.otherUser.rating}</span>
                      </div>
                      <span>•</span>
                      <span>{swap.createdAt}</span>
                    </div>
                  </div>
                </div>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(swap.status)}`}>
                  {swap.status}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Your Item */}
                <div>
                  <p className="text-sm text-gray-500 mb-2">You're offering:</p>
                  <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                    <img
                      src={swap.myItem.image}
                      alt={swap.myItem.title}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold">{swap.myItem.title}</h4>
                      <p className="text-green-600 font-bold">{swap.myItem.points} points</p>
                    </div>
                  </div>
                </div>

                {/* Their Item */}
                <div>
                  <p className="text-sm text-gray-500 mb-2">You'll receive:</p>
                  <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                    <img
                      src={swap.theirItem.image}
                      alt={swap.theirItem.title}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold">{swap.theirItem.title}</h4>
                      <p className="text-green-600 font-bold">{swap.theirItem.points} points</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-6">
                {swap.status === 'pending' && (
                  <>
                    <button className="btn-primary py-2 px-6">Accept Swap</button>
                    <button className="btn-secondary py-2 px-6">Decline</button>
                  </>
                )}
                {swap.status === 'accepted' && (
                  <>
                    <button className="btn-primary py-2 px-6">Mark as Complete</button>
                    <button className="btn-secondary py-2 px-6">Contact User</button>
                  </>
                )}
                {swap.status === 'completed' && (
                  <button className="btn-secondary py-2 px-6">Leave Review</button>
                )}
                <a
                  href={`/swaps/${swap.id}`}
                  className="ml-auto text-green-600 hover:text-green-700 font-medium flex items-center gap-1"
                >
                  View Details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredSwaps.length === 0 && (
          <div className="text-center py-16">
            <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            <p className="text-gray-500 text-lg">No swaps found</p>
            <a href="/browse" className="btn-primary mt-4 inline-block">
              Browse Items
            </a>
          </div>
        )}
      </div>
    </AppLayout>
  )
} 