import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '3ree Managment System',
  description: 'a 3ree management system for a warehouse with visual rack tracking',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
