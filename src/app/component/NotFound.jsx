import React from 'react'
import emptyState from "../Asset/Empty State.svg"
import Image from "next/image"
import { ReviewButton } from './ReviewButton'

export const NotFound = ({toggleReview}) => {
  return (
    <div className='flex justify-center items-center mx-auto h-[70vh]'>
        <div className='space-y-8 text-center'>
    <Image src={emptyState} alt="" />
    <p>Ooops, no review yet</p>
    <ReviewButton toggleReview={toggleReview}/>
        </div>
    </div>
  )
}
