"use client"
import React from 'react'
// import { useSession, signIn, signOut } from "next-auth/react"
export default function username({params}) {
    //   const { data: session } = useSession()
  return (
    <div>
        <div className='flex justify-center items-center relative'>

        <img className='w-[900px] h-[400px] object-cover' src="https://img.freepik.com/premium-vector/programming-code-coding-hacker-background-programming-code-icon-made-with-binary-code_127544-815.jpg" alt="bg" />
        <div>
            {/* <img src= alt="" /> */}
        </div>
        </div>
      {params.username}
    </div>
  )
}
