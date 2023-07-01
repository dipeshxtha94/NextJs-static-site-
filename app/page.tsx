import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Main from './components/main'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <div className='flex'>
        <div className='w-20 xl:w-64 h-full'>
        <Sidebar />
        </div>
        <Main />
      </div>
      
    </main>
  )
}
