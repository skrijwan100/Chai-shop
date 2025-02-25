"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

export default function Navbar() {
  const { data: session } = useSession()
  const handleclick = () => {
    console.log(session)
  }
  // if(session) {
  //   return <>
  //     {/* Signed in as  <br/> */}
  //     <div className=' bg-[#002439]  h-16 flex justify-end'>

  //     </div>
  //   </>
  // }
  return (
    <div>

      <nav className={`flex justify-between text-white bg-[#002439] h-16 items-center px-7`}>
        <div className='font-bold'> This is logo </div>
        {session && <div><button onClick={handleclick} type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">  {session.user.name} <br /> <span className='text-xs'>{session.user.email}</span> </button> <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => signOut()}>Logout</button></div>}
        {!session && <>
          <Link href="/login">  <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button></Link></>}
      </nav>
    </div>
  )
}
