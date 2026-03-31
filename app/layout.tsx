import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ArchiveTune Admin',
  description: 'Admin panel for managing ArchiveTune subscriptions',
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
