import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Base path for GitHub Pages deployment
export const basePath = process.env.NODE_ENV === 'production' ? '/skandatech' : ''

// Helper function to get the correct path with basePath
export function getAssetPath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${basePath}/${cleanPath}`
}
