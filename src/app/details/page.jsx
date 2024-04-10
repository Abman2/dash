"use client"

import Image from 'next/image'
import { CommentArray } from '../component/CommentArray'
import { useState } from 'react'
import { useFetch } from '../component/useFetch'
import { Review } from '../component/Review'
import { DetailsHeader } from '../component/DetailsHeader'
import { NotFound } from '../component/NotFound'

export default function Details ()  {
   const [address,setAddress] = useState("")
    const{data,loading} = useFetch("https://abman2.github.io/repo-exercise/addresses.json")
console.log(data)
   const details= data?.filter(x=>x.address.toLowerCase()==address.toLowerCase())
   console.log(details)
   const comment =   details?.map(x=>x.comment)
   const amenities =  details?.map(x=>x.amenities)
   const [showMenu, setShowMenu] = useState(false);
   const toggleReview = () => {
    setShowMenu(!showMenu);
  };
  

   
  return (
   !showMenu?<>
     <DetailsHeader toggleReview={toggleReview} address={address} setAddress={setAddress} comment={comment} amenities={amenities} /> 
    {comment.length == 0 && address.length != 0 ? <NotFound toggleReview={toggleReview}/> :<main className='flex max-w-7xl mx-auto'>
        <section className='w-3/5'>
            <CommentArray comment={comment}/>
        </section>
        <section className='lg:w-2/5 flex flex-wrap justify-center gap-1 p-8 h-fit max-w-md'>
        { details?.map(imag=>{
            return(
                imag.images?.map(image=>{
               
                    return(
                        <Image src={image} alt={image} width={36} height={28} className=' w-40 rounded-3xl' key={image}/>
                    )
                }
                )
            )
            
          
        })}
        </section>
    </main>}
   </>:<Review toggleReview={toggleReview} address={address}/>
  )
}
