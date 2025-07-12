'use client'
import AppLayout from '../../src/components/layout/AppLayout'

export default function AdminPanelPage() {
  const handleApproval = (itemId: number, action: 'approve' | 'reject') => {
    console.log(`Item ${itemId} has been ${action}d.`)
    alert(`Item ${itemId} has been ${action}d.`)
  }
  
  const handleReport = (reportId: number, action: 'review' | 'resolve') => {
    console.log(`Report ${reportId} action: ${action}.`)
    alert(`Report ${reportId} action: ${action}.`)
  }

  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage and monitor the ReWear platform</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <span className="text-sm text-gray-500">24h</span>
            </div>
            <div className="text-2xl font-bold">1,234</div>
            <div className="text-sm text-gray-600">Total Users</div>
            <div className="text-xs text-green-600 mt-2">+12.5% from last week</div>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <span className="text-sm text-gray-500">Active</span>
            </div>
            <div className="text-2xl font-bold">456</div>
            <div className="text-sm text-gray-600">Listed Items</div>
            <div className="text-xs text-green-600 mt-2">+8.2% from last week</div>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <span className="text-sm text-gray-500">This month</span>
            </div>
            <div className="text-2xl font-bold">89</div>
            <div className="text-sm text-gray-600">Completed Swaps</div>
            <div className="text-xs text-green-600 mt-2">+23.1% from last month</div>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-sm text-gray-500">Pending</span>
            </div>
            <div className="text-2xl font-bold">12</div>
            <div className="text-sm text-gray-600">Reports</div>
            <div className="text-xs text-red-600 mt-2">3 urgent</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Pending Items */}
          <div className="lg:col-span-2 card p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Pending Item Approvals</h2>
              <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">5 new</span>
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <img 
                      src={`https://images.unsplash.com/photo-${1500000000000 + i * 1000}?w=60&h=60&fit=crop`}
                      alt="Pending item"
                      className="w-14 h-14 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-semibold">Pending Item {i}</h3>
                      <p className="text-sm text-gray-600">Submitted by @user{i} • 2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleApproval(i, 'approve')}
                      className="px-3 py-1 bg-green-100 text-green-700 rounded hover:bg-green-200 transition-colors"
                    >
                      Approve
                    </button>
                    <button 
                      onClick={() => handleApproval(i, 'reject')}
                      className="px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 text-center text-green-600 hover:text-green-700 font-medium">
              View All Pending Items →
            </button>
          </div>

          {/* Recent Activity */}
          <div className="card p-6">
            <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {[
                { type: 'user', action: 'New user registered', time: '5 min ago', icon: '👤' },
                { type: 'swap', action: 'Swap completed', time: '12 min ago', icon: '🔄' },
                { type: 'item', action: 'Item reported', time: '1 hour ago', icon: '⚠️' },
                { type: 'review', action: 'New review posted', time: '2 hours ago', icon: '⭐' },
              ].map((activity, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-2xl">{activity.icon}</span>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reports Section */}
        <div className="card p-6 mt-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">User Reports</h2>
            <select 
              className="px-3 py-1 border rounded-lg text-sm"
              aria-label="Filter reports"
              title="Filter reports by status"
            >
              <option>All Reports</option>
              <option>Urgent</option>
              <option>Resolved</option>
              <option>Pending</option>
            </select>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-left">
                  <th className="pb-3 font-medium">Reporter</th>
                  <th className="pb-3 font-medium">Type</th>
                  <th className="pb-3 font-medium">Description</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3].map(i => (
                  <tr key={i} className="border-b">
                    <td className="py-3">@user{i}</td>
                    <td className="py-3">
                      <span className="px-2 py-1 bg-gray-100 rounded text-xs">Inappropriate content</span>
                    </td>
                    <td className="py-3 text-sm text-gray-600">Item contains prohibited content...</td>
                    <td className="py-3">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        i === 1 ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {i === 1 ? 'Urgent' : 'Pending'}
                      </span>
                    </td>
                    <td className="py-3">
                      <button 
                        onClick={() => handleReport(i, 'review')}
                        className="text-green-600 hover:text-green-700 text-sm font-medium"
                      >
                        Review
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AppLayout>
  )
} 