import React from 'react'
import Link from 'next/link'
import logo from "../Asset/ic_logo.svg"
import Image from 'next/image'

export const NavBar = () => {
  return (
    <nav className='flex max-w-7xl flex-row mx-auto justify-between py-5'>
      <Link href="/"><Image src={logo} alt="aa" /></Link>
      <Link href="/" className='text-blue-600 uppercase text-sm tracking-wide font-semibold'>Login</Link>
    </nav>
  )
}

