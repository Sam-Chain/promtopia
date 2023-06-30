import Nav from '@components/Nav'
import '@styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Promtopia',
  description: 'discover and share AI Prompts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className='app'>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  )
}
