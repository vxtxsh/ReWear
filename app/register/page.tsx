'use client'
import { useState } from 'react'
import AppLayout from '../../src/components/layout/AppLayout'
import Link from 'next/link'

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    location: '',
  })
  const [agreed, setAgreed] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    if (!agreed) {
      alert('You must agree to the Terms of Service and Privacy Policy.')
      return
    }
    console.log('Registering new user:', formData)
    // Mock successful registration
    alert('Registration successful! (Check console for data)')
  }

  return (
    <AppLayout>
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          <div className="card p-8 animate-scale-in">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold mb-2">Join ReWear</h1>
              <p className="text-gray-600">Start your sustainable fashion journey</p>
            </div>
            
            <form onSubmit={handleRegister} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input 
                    type="text" 
                    name="firstName"
                    className="input" 
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input 
                    type="text" 
                    name="lastName"
                    className="input" 
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input 
                  type="email" 
                  name="email"
                  className="input" 
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Username
                </label>
                <input 
                  type="text" 
                  name="username"
                  className="input" 
                  placeholder="johndoe"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input 
                  type="password" 
                  name="password"
                  className="input" 
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <p className="text-xs text-gray-500 mt-1">Must be at least 8 characters</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <input 
                  type="text" 
                  name="location"
                  className="input" 
                  placeholder="City, State"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="flex items-start">
                <input 
                  type="checkbox" 
                  className="mt-1 rounded border-gray-300 text-green-600 focus:ring-green-500" 
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  required
                  title="Agree to terms and conditions"
                />
                <label className="ml-2 text-sm text-gray-600">
                  I agree to the{' '}
                  <Link href="#" className="text-green-600 hover:text-green-700">Terms of Service</Link>
                  {' '}and{' '}
                  <Link href="#" className="text-green-600 hover:text-green-700">Privacy Policy</Link>
                </label>
              </div>
              
              <button type="submit" className="w-full btn-primary">
                Create Account
              </button>
              
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Your information is secure and will never be shared</span>
              </div>
            </form>
            
            <p className="text-center text-sm text-gray-600 mt-6">
              Already have an account?{' '}
              <Link href="/login" className="text-green-600 hover:text-green-700 font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  )
} 