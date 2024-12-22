import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from '../components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Productive.me - Business Productivity Suite',
  description: 'All-in-one productivity suite for modern businesses',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full`}>
        <Navigation />
        <div className="pt-14">
          {children}
        </div>
      </body>
    </html>
  )
}
