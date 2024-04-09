"use client"
import Link from 'next/link'
import logo from "../Asset/ic_logo.svg"
import Image from 'next/image'
import { Search } from '../component/Search'
import { CommentArray } from '../component/CommentArray'
import { useState } from 'react'
import { useFetch } from '../component/useFetch'

export default function Details ()  {
   const [address,setAddress] = useState("")
    const{data} = useFetch("http://localhost:5000/addresses")
   const details= data.filter(x=>x.address.toLowerCase()==address.toLowerCase())
   const comment = details.map(x=>x.comment)
  

    const arr=["school", "mosque","church","house" ,"sango","table","chair","bag","book"]
  return (
   < >
      <header className='bg-slate-100'>
     <nav className='flex  flex-row mx-auto justify-between py-5 lg:max-w-7xl max-w-md items-center'>
     <Link href="/"><Image src={logo} alt="aa" /></Link>
    <Search address={address} setAddress={setAddress}/>
      <Link href="/" className='text-blue-600 uppercase text-sm tracking-wide font-semibold'>Login</Link>
     </nav>
     <div className='max-w-7xl mx-auto'>
    <div className='flex justify-between items-center'>
        <div>
        <h1 className='text-2xl text-slate-900'>{address|| " "}</h1>
    <p className='font-semibold text-md'>"{comment[0]?.length || 0}" Reviews</p>
        </div>
        <div>
<button className='bg-blue-600 text-white font-semibold p-3 px-8 rounded-xl text-base'>Leave a Review</button>
        </div>
    </div>
    <div className='space-x-3'>{arr.map(ar=>{return <button key={arr} className='border my-2 py-0.5 text-xs bg-white rounded-md px-2 border-slate-500'>{ar}</button>})}</div>
     </div>
    </header>
    <main className='flex max-w-7xl mx-auto'>
        <section className='w-3/5'>
            <CommentArray comment={comment}/>
        </section>
        <section className='w-2/5 flex flex-wrap justify-center gap-1 p-8 h-fit'>
        {details?.map(imag=>{
            return(
                imag.images?.map(image=>{
                    return(
                        <Image src={image} alt={image} width={36} height={28} className=' w-40 rounded-3xl'/>
                    )
                }
                )
            )
            
          
        })}
        </section>
    </main>
   </>
  )
}
