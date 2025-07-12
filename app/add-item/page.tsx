'use client'
import { useState } from 'react'
import AppLayout from '../../../src/components/layout/AppLayout'

export default function AddNewItemPage() {
  const [images, setImages] = useState<File[]>([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [type, setType] = useState('')
  const [size, setSize] = useState('')
  const [condition, setCondition] = useState('')
  const [tags, setTags] = useState('')
  const [points, setPoints] = useState(0)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newItem = {
      title,
      description,
      category,
      type,
      size,
      condition,
      tags: tags.split(',').map(tag => tag.trim()),
      points,
      images,
    }
    console.log('New item submitted:', newItem)
    // Here you would typically send the data to your backend API
    alert('Item submitted for review!')
  }

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">List a New Item</h1>
          <p className="text-gray-600">Share your pre-loved fashion with the community!</p>
        </div>

        <form onSubmit={handleSubmit} className="card p-8 space-y-6">
          {/* Image Upload */}
          <div>
            <label className="block text-lg font-semibold text-gray-800 mb-2">Upload Photos</label>
            <p className="text-sm text-gray-500 mb-4">Good photos increase your chances of a swap. Upload up to 5 images.</p>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <input 
                type="file" 
                multiple 
                onChange={handleImageUpload} 
                className="input"
                accept="image/*"
                id="image-upload"
                aria-label="Upload images"
              />
              <label htmlFor="image-upload" className="cursor-pointer text-green-600 hover:text-green-700 font-medium">
                Choose files or drag and drop
              </label>
              <div className="mt-4 flex flex-wrap gap-4 justify-center">
                {images.map((file, i) => (
                  <img 
                    key={i} 
                    src={URL.createObjectURL(file)} 
                    alt={`preview ${i}`} 
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Item Details */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">Title</label>
            <input id="title" type="text" value={title} onChange={e => setTitle(e.target.value)} className="input" placeholder="e.g., Vintage Blue Denim Jacket" required />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea id="description" value={description} onChange={e => setDescription(e.target.value)} className="input" rows={4} placeholder="Describe the item, its condition, and any special features." required></textarea>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select id="category" value={category} onChange={e => setCategory(e.target.value)} className="input" required>
                <option value="">Select Category</option>
                <option>Tops</option>
                <option>Bottoms</option>
                <option>Dresses</option>
                <option>Outerwear</option>
                <option>Accessories</option>
              </select>
            </div>
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">Type</label>
              <input id="type" type="text" value={type} onChange={e => setType(e.target.value)} className="input" placeholder="e.g., T-Shirt, Jeans, Handbag" required />
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-2">Size</label>
              <select id="size" value={size} onChange={e => setSize(e.target.value)} className="input" required>
                <option value="">Select Size</option>
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
            <div>
              <label htmlFor="condition" className="block text-sm font-medium text-gray-700 mb-2">Condition</label>
              <select id="condition" value={condition} onChange={e => setCondition(e.target.value)} className="input" required>
                <option value="">Select Condition</option>
                <option>New with tags</option>
                <option>Excellent</option>
                <option>Good</option>
                <option>Fair</option>
              </select>
            </div>
            <div>
              <label htmlFor="points" className="block text-sm font-medium text-gray-700 mb-2">Points Value</label>
              <input id="points" type="number" value={points} onChange={e => setPoints(Number(e.target.value))} className="input" placeholder="e.g., 30" required />
            </div>
          </div>

          <div>
            <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
            <input id="tags" type="text" value={tags} onChange={e => setTags(e.target.value)} className="input" placeholder="e.g., vintage, denim, 90s (comma-separated)" />
          </div>

          <div className="pt-4 border-t">
            <button type="submit" className="w-full btn-primary">
              Submit for Review
            </button>
            <p className="text-xs text-gray-500 mt-2 text-center">Your item will be reviewed by an admin before it goes live.</p>
          </div>
        </form>
      </div>
    </AppLayout>
  )
} 