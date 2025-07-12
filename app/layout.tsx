import './globals.css'
import type { ReactNode } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ReWear - Sustainable Fashion Exchange',
  description: 'Swap, share, and save the planet. Join our community for sustainable fashion exchanges.',
  keywords: 'sustainable fashion, clothing swap, eco-friendly, community exchange',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
} 