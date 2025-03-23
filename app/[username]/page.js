
import React from 'react'
// import { useSession, signIn, signOut } from "next-auth/react"
export default function username({ params }) {
  //   const { data: session } = useSession()

  return (
    <div>
      <div className='flex justify-center items-center relative'>
      <img className='w-[900px] h-[400px] object-cover' src="https://img.freepik.com/premium-vector/programming-code-coding-hacker-background-programming-code-icon-made-with-binary-code_127544-815.jpg" alt="bg" />
      <div>
      </div>
      </div>
      <div className="user">
      <div className='text-white font-bold text-center text-3xl'>Hii {params.username}</div>
      </div>
      <div className="pyment flex justify-around items-center">
      <div className="donet h-[400px] w-[600px] mx-3 bg-slate-900 text-center">
        <ul>
        <li className='text-white text-xl'>Sk rijwan donaet <span className='font-bold '> $20</span> with the message.</li>
        <li className='text-white text-xl'>Sk rijwan donaet <span className='font-bold '> $20</span> with the message.</li>
        <li className='text-white text-xl'>Sk rijwan donaet <span className='font-bold '> $20</span> with the message.</li>
        <li className='text-white text-xl'>Sk rijwan donaet <span className='font-bold '> $20</span> with the message.</li>
        <li className='text-white text-xl'>Sk rijwan donaet <span className='font-bold '> $20</span> with the message.</li>
        <li className='text-white text-xl'>Sk rijwan donaet <span className='font-bold '> $20</span> with the message.</li>
        <li className='text-white text-xl'>Sk rijwan donaet <span className='font-bold '> $20</span> with the message.</li>
        <li className='text-white text-xl'>Sk rijwan donaet <span className='font-bold '> $20</span> with the message.</li>
        </ul>
      </div>
      <div className="pymetoption h-[400px] w-[600px] mx-3 bg-slate-900 flex flex-col gap-5 p-5">
        <div className="amount">
        <input className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" type="number" placeholder="Enter amount"required />
        </div>
        <div className="name">
        <input className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Enter your name"required />
        </div>
        <div className="meassge">
        <input className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Enter a message" required/>
        </div>
        <div className="pymentbtn">
        <button className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Pay</button>
        </div>
      </div>
      </div>
    </div>
    )
}
