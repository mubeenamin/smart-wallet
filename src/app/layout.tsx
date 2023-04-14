import './globals.css'

export const metadata = {
  title: 'AA Smart Wallet',
  description: 'Connect with social network',
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
