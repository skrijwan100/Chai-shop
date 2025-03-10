"use client"
import React, { useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import { initFlowbite } from 'flowbite'
export default function Navbar() {
    const { data: session } = useSession()
  
  useEffect(() => {
    initFlowbite();
  }, []);

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
        {session && <div><button onClick={handleclick} type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-2">  {session.user.name} <br /> <span className='text-xs'>{session.user.email}</span> </button> <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => signOut()}>Logout</button></div>}
        {/* {session && <>
          <button id="dropdownInformationButton" data-dropdown-toggle="dropdownInformation" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">hi <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
          </button>

          <div id="dropdownInformation" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600">
            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
              <div>{session.user.name}</div>
              <div className="font-medium truncate">{session.user.email}</div>
            </div>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
              </li>
            </ul>
            <div className="py-2">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" onClick={() => signOut()}>Sign out</a>
            </div>
          </div>
        </>
        } */}
        {!session && <>
          <Link href="/login">  <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button></Link></>}
      </nav>
    </div>
  )
}
