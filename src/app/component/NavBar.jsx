import React from 'react'
import Link from 'next/link'
import logo from "../Asset/ic_logo.svg"
import Image from 'next/image'

export const NavBar = () => {
  return (
    <nav className='flex  flex-row mx-auto justify-between py-5 lg:max-w-7xl max-w-md'>
      <Link href="/app"><Image src={logo} alt="aa" /></Link>
      
      <Link href="/app" className='text-blue-600 uppercase text-sm tracking-wide font-semibold'>Login</Link>
    </nav>
  )
}

