import { Heebo } from 'next/font/google'
import './globals.css'
import 'remixicon/fonts/remixicon.css'
import HeaderNav from '@/components/HeaderNav'
import FooterLink from '@/components/FooterLink'
import { AuthProvider } from '@/contexts/authContext'

const inter = Heebo({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'Welcome to my Full Stack portfolio repository! Here you will find a collection of projects where I apply technologies such as Next.js, React, TailwindCSS for the frontend, and Express, Node.js, and Sequelize for the backend.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-blue-50 bg-opacity-25 text-gray-800`}>
        <main className='mt-16 md:mt-[68px]'>
          <AuthProvider>
            <HeaderNav />
            {children}
            <FooterLink />
          </AuthProvider>
        </main>
      </body>
    </html>
  )
}
