import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Movira Studios — Learn, Create, Film',
  description: 'Agency • Academy • Originals',
  icons: { icon: '/favicon.png' }
}


export default function RootLayout({ children }:{ children: React.ReactNode }){
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  )
}
