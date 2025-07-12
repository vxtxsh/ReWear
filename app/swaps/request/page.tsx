import AppLayout from '../../../src/components/layout/AppLayout'

export default function SwapRequestPage() {
  return (
    <AppLayout>
      <div className="max-w-lg mx-auto bg-white rounded shadow p-6 mt-8">
        <h1 className="text-2xl font-bold mb-4">Request a Swap</h1>
        <form className="flex flex-col gap-4">
          <label className="flex flex-col gap-1">
            <span className="font-medium">Your Item</span>
            <select className="border rounded px-3 py-2">
              <option>Select your item</option>
            </select>
          </label>
          <label className="flex flex-col gap-1">
            <span className="font-medium">Item to Swap For</span>
            <select className="border rounded px-3 py-2">
              <option>Select item to swap for</option>
            </select>
          </label>
          <label className="flex flex-col gap-1">
            <span className="font-medium">Message (optional)</span>
            <textarea className="border rounded px-3 py-2" rows={3} />
          </label>
          <button type="submit" className="bg-primary-600 text-white px-6 py-2 rounded font-semibold hover:bg-primary-700 transition mt-2">
            Send Swap Request
          </button>
        </form>
      </div>
    </AppLayout>
  )
} 