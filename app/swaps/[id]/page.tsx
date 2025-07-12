import AppLayout from '../../../src/components/layout/AppLayout'

export default function SwapDetailPage() {
  // In a real app, fetch swap by ID from params
  const swap = {
    id: '1',
    itemTitle: 'Vintage Denim Jacket',
    status: 'pending',
    otherUser: 'alice',
    messages: [
      { sender: 'me', text: 'Hi! Interested in swapping?' },
      { sender: 'alice', text: 'Sure! What do you have?' },
    ],
  }

  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto mt-8 bg-white rounded shadow p-6">
        <h1 className="text-2xl font-bold mb-4">Swap with {swap.otherUser}</h1>
        <div className="mb-4">
          <span className="font-semibold">Item:</span> {swap.itemTitle}
        </div>
        <div className="mb-4">
          <span className="font-semibold">Status:</span>{' '}
          <span className="px-3 py-1 rounded text-xs font-semibold bg-blue-100 text-blue-700 capitalize">
            {swap.status}
          </span>
        </div>
        <div className="mb-6">
          <h2 className="font-semibold mb-2">Messages</h2>
          <div className="flex flex-col gap-2">
            {swap.messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-xs ${msg.sender === 'me' ? 'bg-primary-100 self-end' : 'bg-gray-100 self-start'}`}
              >
                <span className="block text-xs text-gray-500 mb-1">{msg.sender}</span>
                {msg.text}
              </div>
            ))}
          </div>
        </div>
        <form className="flex gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 border rounded px-3 py-2"
          />
          <button type="submit" className="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700 transition">
            Send
          </button>
        </form>
      </div>
    </AppLayout>
  )
} 