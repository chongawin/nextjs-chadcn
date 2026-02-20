'use client'

import React from 'react'

interface ThemeProviderProps {
  children: React.ReactNode
}

/**
 * ThemeProvider for dark mode support (future implementation)
 * 
 * To enable dark mode, add 'dark' class to <html> element:
 * <html className="dark">
 * 
 * Currently just a passthrough wrapper. Enhance this when implementing dark mode.
 * 
 * Example future implementation:
 * - Use next-themes for dark mode toggle
 * - Store preference in localStorage
 * - Sync with system preferences
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
  // Currently just passes through children
  // Add dark mode logic here when needed
  return <>{children}</>
}
