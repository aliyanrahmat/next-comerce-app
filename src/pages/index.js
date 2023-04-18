import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
    <div className='bg-green-600'>
   
  <ul className='flex p-6 gap-20 text-2xl capitalize font-bold cursor-pointer'>
  <div className='mr-32 cursor-pointer'>
  <h1 className='hover:text-white'>developers</h1>
  </div>
  <li>
  <a className='hover:text-white'>home</a>
  </li>
  <li>
  <a className='hover:text-white'>contact</a>
  </li>
  <li>
  <a className='hover:text-white'>gallery</a>
  </li>
  <li>
  <a className='hover:text-white'>about</a>
  </li>
  <div>
  <button className='bg-white rounded-full w-32 hover:bg-green-500 hover:text-white'>login</button>
  </div>
  </ul>
    </div>
   
    </main>
  )
}
