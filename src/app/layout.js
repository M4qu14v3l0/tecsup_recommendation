import { Inter } from 'next/font/google'
import '@/ui/globals.css'
import Navbar from '@/ui/shared/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TECSUP',
  description: 'Sistema de recmendación',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
