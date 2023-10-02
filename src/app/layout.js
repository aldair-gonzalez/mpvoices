import React from 'react'
import { Inter } from 'next/font/google'
import './globals.scss'
import Navigation from './components/Navigation.js'
import Footer from './components/Footer.js'
import WaButton from './components/WaButton'

export const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MP Voices',
  description: 'Maria Peña Voices',
  themeColor: '#0D0D0D'
}

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/voices.svg" type="image/x-icon" />
      </head>
      <body className='flex flex-col h-screen mt-[3rem] lg:mt-[6rem]'>
        <Navigation />
        <WaButton />
        {children}
        <Footer />
      </body>
    </html>
  )
}
