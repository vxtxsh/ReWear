import AppLayout from '../src/components/layout/AppLayout'

const featuredItems = [
  {
    id: '1',
    title: 'Vintage Denim Jacket',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f',
    status: 'active',
    points: 40,
  },
  {
    id: '2',
    title: 'Classic White Sneakers',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
    status: 'active',
    points: 30,
  },
  {
    id: '3',
    title: 'Floral Summer Dress',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c',
    status: 'active',
    points: 35,
  },
]

import ItemGrid from '../src/components/items/ItemGrid'

export default function HomePage() {
  return (
    <AppLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-50"></div>
        <div className="relative flex flex-col items-center justify-center py-20 px-4 text-center animate-fade-in">
          <div className="mb-8 animate-float">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-xl">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-slide-up">
            <span className="text-gradient">ReWear</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mb-8 animate-slide-up" style={{animationDelay: '0.1s'}}>
            Swap, share, and save the planet. Discover sustainable fashion, connect with your community, and give your clothes a second life!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <a href="/browse" className="btn-primary">
              Start Swapping
            </a>
            <a href="/register" className="btn-secondary">
              Join Community
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 md:gap-16 mb-16 animate-slide-up" style={{animationDelay: '0.3s'}}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient">500+</div>
              <div className="text-sm text-gray-600">Active Swappers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient">2,000+</div>
              <div className="text-sm text-gray-600">Items Swapped</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient">98%</div>
              <div className="text-sm text-gray-600">Happy Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Items</h2>
            <p className="text-gray-600 text-lg">Discover amazing pieces from our community</p>
          </div>
          <ItemGrid items={featuredItems} />
          <div className="text-center mt-8">
            <a href="/browse" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium">
              View All Items
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 text-lg">Start swapping in 3 simple steps</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">List Your Items</h3>
              <p className="text-gray-600">Upload photos and describe the clothes you want to swap</p>
            </div>
            <div className="card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Browse & Connect</h3>
              <p className="text-gray-600">Find items you love and request swaps with other users</p>
            </div>
            <div className="card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Swap & Enjoy</h3>
              <p className="text-gray-600">Meet up or ship items to complete your sustainable swap</p>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  )
} 