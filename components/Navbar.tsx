import Link from 'next/link'
import React from 'react'
import image from '../assets/images/iknite-logo.png'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className="flex px-28 md:px-4 h-[88px] py-6 dark:bg-gray-900 justify-between items-center max-w-[1440px] mx-auto ">
      <div className="flex">
        <div className="px-28 flex-shrink-0 ">
          <Image src={image} height={50} width={50} alt='...' />
        </div>
        <div className=" w-full block flex-grow lg:flex lg:items-center lg:w-auto items-center lg:space-x-4">
          <ul className="flex flex-col items-center text-white font-medium md:flex-row md:space-x-8 md:mt-0 lg:flex-row text-[16px]">
            <li className="block mt-4 lg:inline-block">
               <Link href="/">Home</Link>
            </li>
            <li className="block mt-4 lg:inline-block hover:bg-red-400">
               <Link href="/contact">About</Link>
            </li>
            <li className="block mt-4 lg:inline-block hover:bg-red-400">
               <Link href="/about">Project</Link>
            </li>
            <li className="block mt-4 lg:inline-block hover:bg-red-400">
               <Link href="/about">Team</Link>
            </li>
            <li className="block mt-4 lg:inline-block hover:bg-red-400">
               <Link href="/about">Events</Link>
            </li>
          </ul>
      </div>

      </div>
      
      <div className="px-28 justify-end ">
         <button className="bg-white hover:bg-blue-700 text-[#131039] text-[16px] lg:rounded-full font-medium py-2 px-4 rounded-full">
          Let's Talk
         </button>
      </div>
    </div>
  )
}