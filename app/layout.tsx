import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Skanda - Experience Expertise",
  description: "Skanda is a leading IT consulting firm, providing innovative solutions to businesses worldwide.",
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href={`${process.env.NODE_ENV === 'production' ? '/skandatech' : ''}/favicon.ico`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            // Force scroll to top on every page navigation
            if (typeof window !== 'undefined') {
              // For Next.js client-side navigation
              window.history.scrollRestoration = 'manual';
              
              // Scroll to top immediately when the page starts loading
              window.scrollTo(0, 0);
              
              // Also scroll when the DOM is fully loaded
              document.addEventListener('DOMContentLoaded', function() {
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: 'auto'
                });
              });
              
              // And when all resources are loaded
              window.addEventListener('load', function() {
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: 'auto'
                });
              });
              
              // For SPAs, listen to route changes
              let lastNavigation = Date.now();
              
              // Intercept all link clicks
              document.addEventListener('click', function(e) {
                const link = e.target.closest('a');
                if (link && link.href && !link.target && link.href.startsWith(window.location.origin)) {
                  lastNavigation = Date.now();
                }
              });
              
              // Check periodically if navigation might have occurred
              setInterval(function() {
                if (Date.now() - lastNavigation < 1000) {
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'auto'
                  });
                }
              }, 200);
            }
          `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
