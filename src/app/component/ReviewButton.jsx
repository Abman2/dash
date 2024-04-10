import React from 'react'

export const ReviewButton = ({toggleReview}) => {
  return (
    <button className='bg-blue-600 text-white font-semibold md:p-3 p-1 px-2 md:px-8 rounded-xl text-base' onClick={toggleReview}>Leave a Review</button>

  )
}
