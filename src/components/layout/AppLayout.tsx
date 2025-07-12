import Header from './Header'
import Footer from './Footer'
import { ReactNode } from 'react'

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-2 sm:px-4 py-6 w-full max-w-7xl">{children}</main>
      <Footer />
    </div>
  )
} 