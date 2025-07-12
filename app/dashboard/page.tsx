'use client'
import AppLayout from '../../src/components/layout/AppLayout'
import { useState } from 'react'

const tabs = [
  'Profile',
  'My Items',
  'Swaps',
  'Points',
  'Reviews',
]

export default function DashboardPage() {
  const [tab, setTab] = useState(0)

  return (
    <AppLayout>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">My Dashboard</h1>
          <p className="text-gray-600">Manage your profile, items, and swaps</p>
        </div>

        {/* User Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card p-6 text-center">
            <div className="text-3xl font-bold text-gradient mb-2">250</div>
            <div className="text-gray-600">Points Earned</div>
          </div>
          <div className="card p-6 text-center">
            <div className="text-3xl font-bold text-gradient mb-2">12</div>
            <div className="text-gray-600">Items Listed</div>
          </div>
          <div className="card p-6 text-center">
            <div className="text-3xl font-bold text-gradient mb-2">8</div>
            <div className="text-gray-600">Successful Swaps</div>
          </div>
          <div className="card p-6 text-center">
            <div className="text-3xl font-bold text-gradient mb-2">4.9</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {tabs.map((t, i) => (
            <button
              key={t}
              className={`px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-all duration-200 ${
                tab === i 
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
              }`}
              onClick={() => setTab(i)}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="card p-8 min-h-[400px] animate-fade-in">
          {tab === 0 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-4">Profile Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" className="input" defaultValue="Jane Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="input" defaultValue="jane@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <input type="text" className="input" defaultValue="New York, NY" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input type="tel" className="input" defaultValue="+1 234 567 8900" />
                </div>
              </div>
              <button className="btn-primary">Save Changes</button>
            </div>
          )}
          
          {tab === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">My Items</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="flex gap-4 p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <img 
                      src={`https://images.unsplash.com/photo-${1500000000000 + i * 1000}?w=100&h=100&fit=crop`}
                      alt="Item"
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">Item Title {i}</h3>
                      <p className="text-sm text-gray-600">Listed 3 days ago</p>
                      <p className="text-green-600 font-bold">30 points</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {tab === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Swap History</h2>
              <div className="space-y-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold">Swap with @user{i}</h4>
                        <p className="text-sm text-gray-600">Completed on Oct {i}, 2024</p>
                      </div>
                    </div>
                    <button className="text-green-600 hover:text-green-700 font-medium">View Details</button>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {tab === 3 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Points Summary</h2>
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-xl mb-6">
                <h3 className="text-3xl font-bold mb-2">250 Points</h3>
                <p className="opacity-90">Available for swapping</p>
              </div>
              <h3 className="font-semibold mb-4">Recent Transactions</h3>
              <div className="space-y-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="flex justify-between p-3 border-b">
                    <span className="text-gray-700">Earned from swap #{i}</span>
                    <span className="text-green-600 font-bold">+30</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {tab === 4 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Reviews</h2>
              <div className="space-y-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="p-4 border rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, j) => (
                          <svg key={j} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="font-semibold">@user{i}</span>
                    </div>
                    <p className="text-gray-700">Great swapper! Items were exactly as described and communication was excellent.</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  )
} 