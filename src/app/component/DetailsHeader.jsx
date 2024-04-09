import React from 'react'
import Link from 'next/link'
import logo from "../Asset/ic_logo.svg"
import Image from 'next/image'
import { Search } from '../component/Search'
import { ReviewButton } from './ReviewButton'
export const DetailsHeader = ({address,setAddress,comment,toggleReview}) => {
    const arr=["school", "mosque","church","house" ,"sango","table","chair","bag","book"]
  return (

         <header className='bg-slate-100'>
     <nav className='flex  flex-row mx-auto justify-between py-5 lg:max-w-7xl max-w-md items-center '>
     <Link href="/"><Image src={logo} alt="aa" /></Link>
    <Search address={address} setAddress={setAddress}/>
      <Link href="/" className='text-blue-600 uppercase text-sm tracking-wide font-semibold'>Login</Link>
     </nav>
     <div className='lg:max-w-7xl max-w-md mx-auto'>
    <div className='flex justify-between items-center'>
        <div>
        <h1 className='text-2xl text-slate-900 capitalize'>{address|| " "}</h1>
    <p className='font-semibold text-md'>"{comment[0]?.length || 0}" Reviews </p>
        </div>
        <div>
          <ReviewButton toggleReview={toggleReview}/>
        </div>
    </div>
    <div className='space-x-3 '>{arr.map(ar=>{return <button key={arr} className='border my-2 py-0.5 text-xs bg-white rounded-md px-2 border-slate-500'>{ar}</button>})}</div>
     </div>
    </header>

  )
}
