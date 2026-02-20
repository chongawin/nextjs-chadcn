# shadcn/ui Setup Complete ✨

Your Next.js project is now configured with **shadcn/ui** and **Tailwind CSS**!

## 🎯 What's Installed

- ✅ **shadcn/ui** - High-quality React components
- ✅ **Tailwind CSS 4** - Utility-first CSS framework
- ✅ **Radix UI** - Headless UI primitives
- ✅ **React Query** - Server state management
- ✅ **next-intl** - Internationalization
- ✅ **Axios** - HTTP client

## 📚 Key Files

- [src/frontend/libs/utils.ts](src/frontend/libs/utils.ts) - `cn()` helper for class merging
- [src/frontend/components/ui/Button.tsx](src/frontend/components/ui/Button.tsx) - Example Button component
- [app/globals.css](app/globals.css) - Tailwind CSS variables and base styles
- [tailwind.config.ts](tailwind.config.ts) - Tailwind configuration
- [app/page.tsx](app/page.tsx) - Home page with shadcn components

## 🚀 Quick Start

### Add More shadcn/ui Components

Create components using the Button as a template:

```bash
# Option 1: Manual creation (like Button.tsx)
# Create in src/frontend/components/ui/YourComponent.tsx

# Option 2: Use shadcn CLI (if installed globally)
npx shadcn-ui@latest add card
npx shadcn-ui@latest add input
npx shadcn-ui@latest add dialog
```

### Example: Creating an Input Component

```tsx
// src/frontend/components/ui/Input.tsx
import * as React from 'react'
import { cn } from '@/frontend/libs/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
)
Input.displayName = 'Input'

export { Input }
```

## 🎨 Using Components

### Button Component

```tsx
'use client'

import { Button } from '@/frontend/components/ui'
import Link from 'next/link'

export function MyComponent() {
  return (
    <>
      {/* Variant examples */}
      <Button>Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="destructive">Delete</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>

      {/* Size examples */}
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">→</Button>

      {/* With Link */}
      <Button asChild>
        <Link href="/products">Go to Products</Link>
      </Button>
    </>
  )
}
```

## 🎯 Tailwind Classes

### Common Utilities

```tsx
// Container & Layout
<div className="container mx-auto px-4">
  <div className="flex flex-col gap-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6" />
  </div>
</div>

// Typography
<h1 className="text-4xl font-bold text-white">Heading</h1>
<p className="text-gray-600 text-sm">Description</p>

// Colors
<div className="bg-purple-600 hover:bg-purple-700 text-white" />
<div className="bg-slate-800/50 border border-purple-500/20" />

// Responsive
<div className="flex flex-col sm:flex-row md:flex-col lg:flex-row" />
<h1 className="text-2xl md:text-4xl xl:text-6xl" />

// Spacing
<div className="p-6 m-4 gap-8" />
<div className="py-8 px-4 md:px-8" />

// Effects
<div className="rounded-lg shadow-md hover:shadow-lg transition-shadow" />
<div className="opacity-50 hover:opacity-100" />
```

## 🌓 Dark Mode

Tailwind dark mode is configured for `class` strategy. To enable dark mode:

```tsx
// Update Next.js layout
<html suppressHydrationWarning>
  // ...
</html>

// Toggle dark class on document element
document.documentElement.classList.toggle('dark')
```

## 📦 Project Structure

```
src/frontend/
├── components/
│   └── ui/              # shadcn/ui components
│       ├── Button.tsx
│       ├── Input.tsx    # (add as needed)
│       ├── Card.tsx
│       └── index.ts
└── libs/
    ├── utils.ts         # cn() helper
    └── axios.lib.ts     # API client
```

## ✨ Features Included

- **Type-safe** components with TypeScript
- **Accessible** with Radix UI primitives
- **Responsive** design with Tailwind
- **Dark mode** support (class-based)
- **Customizable** via CSS variables
- **Radix UI** for complex interactions
- **Animation** support via tailwindcss-animate

## 🔗 Resources

- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Radix UI Documentation](https://www.radix-ui.com)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

## 🎓 Next Steps

1. ✅ Install more shadcn/ui components as needed
2. ✅ Create feature pages using components
3. ✅ Customize colors via CSS variables in `globals.css`
4. ✅ Build your beautiful UI!

---

Happy building! 🚀
