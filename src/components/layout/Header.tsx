"use client";
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/browse', label: 'Browse' },
  { href: '/swaps', label: 'Swaps' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/admin', label: 'Admin' },
  { href: '/login', label: 'Login' },
  { href: '/register', label: 'Register' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="w-full bg-white/95 backdrop-blur-md shadow-lg py-4 mb-4 sticky top-0 z-30 border-b border-gray-100">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="font-bold text-2xl text-gradient hover:scale-105 transition-transform duration-200">
          ReWear
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map(link => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
                  isActive 
                    ? 'text-white bg-gradient-to-r from-green-600 to-emerald-600 shadow-md' 
                    : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/items/new" className="hidden md:inline-block btn-primary py-2 px-4 text-sm">
            List an Item
          </Link>
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded hover:bg-gray-100 focus:outline-none"
            onClick={() => setOpen(o => !o)}
            aria-label="Open menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-white border-t shadow px-4 py-2 flex flex-col gap-2 animate-fade-in">
          {navLinks.map(link => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={`text-gray-700 hover:text-primary-600 font-medium py-2 border-b last:border-b-0 transition ${
                  isActive ? 'text-primary-700 font-bold underline underline-offset-4' : ''
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            )
          })}
          <Link href="/items/new" className="w-full text-center btn-primary py-2 px-4 text-sm mt-2">
            List an Item
          </Link>
        </nav>
      )}
    </header>
  )
} 