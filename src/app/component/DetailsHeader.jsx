import React from 'react'
import Link from 'next/link'
import logo from "../Asset/ic_logo.svg"
import share from "../Asset/share.svg"
import bookmark from "../Asset/bookmark.svg"
import Image from 'next/image'
import { Search } from '../component/Search'
import { ReviewButton } from './ReviewButton'
export const DetailsHeader = ({address,setAddress,comment,toggleReview,amenities}) => {
  
  return (

         <header className='bg-slate-100'>
     <nav className='flex  flex-row mx-auto justify-between py-5 lg:max-w-7xl max-w-md items-center '>
     <Link href="/app"><Image src={logo} alt="aa" /></Link>
    <Search address={address} setAddress={setAddress}/>
      <Link href="/" className='text-blue-600 uppercase text-sm tracking-wide font-semibold'>Login</Link>
     </nav>
     <div className='lg:max-w-7xl max-w-md mx-auto'>
    <div className='flex justify-between items-center'>
        <div>
        <h1 className='text-2xl text-slate-900 capitalize'>{address|| " "}</h1>
    <p className='font-semibold text-md'>{comment[0]?.length || 0} Reviews </p>
        </div>
        <div className='flex space-x-4 mb-2'>
          <ReviewButton toggleReview={toggleReview}/>
          <button className='border border-blue-600 rounded-xl px-3 py-1'><Image src={bookmark} alt="bookmark"/></button>
          <button className='border border-blue-600 rounded-xl px-3 py-1'><Image src={share} alt="share"/></button>
        </div>
    </div>
    <div className='space-x-3 '>{amenities[0]?.map(ar=>{return <button key={ar} className='border my-2 py-0.5 text-xs bg-white rounded-md px-2 border-slate-500'>{ar}</button>})}</div>
     </div>
    </header>

  )
}
