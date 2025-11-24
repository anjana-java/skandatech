"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import type React from "react"

interface LinkWrapperProps {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: (e: React.MouseEvent) => void
}

export function LinkWrapper({ href, children, className, onClick }: LinkWrapperProps) {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick(e)
    }

    // If it's an internal link
    if (href.startsWith("/") || href.startsWith(window.location.origin)) {
      e.preventDefault()

      // First scroll to top
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      })

      // Then navigate
      setTimeout(() => {
        router.push(href)
      }, 10)
    }
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  )
}
