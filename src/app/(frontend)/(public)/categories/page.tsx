import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Categories - Next.js ChadCN',
  description: 'Browse all categories',
}

export default function CategoriesPage() {
  const categories = [
    { id: 1, name: 'Technology', icon: '💻', count: 24, color: 'from-blue-500 to-cyan-500' },
    { id: 2, name: 'Fashion', icon: '👕', count: 18, color: 'from-pink-500 to-rose-500' },
    { id: 3, name: 'Home & Garden', icon: '🏡', count: 32, color: 'from-green-500 to-emerald-500' },
    { id: 4, name: 'Sports', icon: '⚽', count: 15, color: 'from-orange-500 to-red-500' },
    { id: 5, name: 'Books', icon: '📚', count: 42, color: 'from-purple-500 to-indigo-500' },
    { id: 6, name: 'Food & Drink', icon: '🍔', count: 28, color: 'from-yellow-500 to-orange-500' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 dark:from-slate-950 dark:via-purple-950 dark:to-slate-950">
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-1.5 text-sm font-medium text-purple-700 dark:border-purple-800 dark:bg-purple-950 dark:text-purple-300 mb-4">
              <span>📁</span>
              Browse Categories
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Explore Our Categories
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Discover a wide range of products organized into convenient categories
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-lg transition-all hover:scale-105 hover:shadow-xl cursor-pointer dark:border-slate-800 dark:bg-slate-900"
              >
                <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${category.color} opacity-10 blur-2xl transition-all group-hover:opacity-20`}></div>
                <div className="relative">
                  <div className={`mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${category.color} text-3xl shadow-lg`}>
                    {category.icon}
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">
                    {category.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {category.count} products available
                  </p>
                  <div className="mt-4 flex items-center text-sm font-medium text-purple-600 dark:text-purple-400">
                    View all
                    <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
