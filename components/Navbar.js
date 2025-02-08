import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
      <nav className='flex justify-between text-white bg-[#002439] h-16 items-center px-7'>
        <div className='font-bold'> This is logo </div>
      <Link href="/login">  <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button></Link>
      </nav>
    </div>
  )
}
