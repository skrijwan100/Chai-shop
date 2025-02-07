import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav className='flex justify-between text-white bg-black h-16 items-center px-7'>
        <div className='font-bold'> This is logo </div>
        <ul className='flex gap-3'>
            <li>Home</li>
            <li>about</li>
            <li>service</li>
            <li>Login</li>
            <li>Sing up</li>
        </ul>
      </nav>
    </div>
  )
}
