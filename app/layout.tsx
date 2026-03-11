import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DISCOVERY 브랜드 2026년 경영 보고서',
  description: 'DISCOVERY 브랜드 2026년 경영 보고서',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>{children}</body>
    </html>
  )
}





