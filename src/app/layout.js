import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './components/NavBar'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Date Calci',
  description: 'About Build with NextJs - gives you ability to convert ist2bst or viceversa and add, sub date and time.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
          
      <body className={inter.className}>
        
      <NavBar />
        {children}
        </body>
    </html>
  )
}
