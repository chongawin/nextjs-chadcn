import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products - Next.js ChadCN',
  description: 'Browse all products',
}

export default function ProductsPage() {
  const products = [
    { id: 1, name: 'Wireless Headphones', price: 99.99, category: 'Technology', image: '🎧', rating: 4.5 },
    { id: 2, name: 'Smart Watch', price: 249.99, category: 'Technology', image: '⌚', rating: 4.8 },
    { id: 3, name: 'Laptop Backpack', price: 49.99, category: 'Fashion', image: '🎒', rating: 4.3 },
    { id: 4, name: 'Coffee Maker', price: 79.99, category: 'Home & Garden', image: '☕', rating: 4.6 },
    { id: 5, name: 'Running Shoes', price: 129.99, category: 'Sports', image: '👟', rating: 4.7 },
    { id: 6, name: 'Cookbook Collection', price: 34.99, category: 'Books', image: '📖', rating: 4.4 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 dark:from-slate-950 dark:via-purple-950 dark:to-slate-950">
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-1.5 text-sm font-medium text-purple-700 dark:border-purple-800 dark:bg-purple-950 dark:text-purple-300 mb-4">
              <span>🛍️</span>
              Our Products
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Featured Products
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Discover our curated selection of high-quality products
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {['All', 'Technology', 'Fashion', 'Home & Garden', 'Sports', 'Books'].map((filter) => (
              <button
                key={filter}
                className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-medium text-slate-700 transition-all hover:border-purple-500 hover:bg-purple-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-purple-500 dark:hover:bg-purple-950/50"
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition-all hover:scale-105 hover:shadow-xl cursor-pointer dark:border-slate-800 dark:bg-slate-900"
              >
                {/* Product Image Area */}
                <div className="relative h-48 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 flex items-center justify-center">
                  <div className="text-7xl opacity-90 transition-transform group-hover:scale-110">
                    {product.image}
                  </div>
                  <div className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 text-sm font-bold text-purple-600 shadow-lg dark:bg-slate-900/90">
                    ${product.price}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="mb-2 text-xs font-medium text-purple-600 dark:text-purple-400">
                    {product.category}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1 mb-4">
                    <span className="text-yellow-500">{'⭐'.repeat(Math.floor(product.rating))}</span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      {product.rating}
                    </span>
                  </div>
                  <button className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition-all hover:scale-105 hover:shadow-purple-500/50">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
