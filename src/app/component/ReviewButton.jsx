import React from 'react'

export const ReviewButton = ({toggleReview}) => {
  return (
    <button className='bg-blue-600 text-white font-semibold p-3 px-8 rounded-xl text-base' onClick={toggleReview}>Leave a Review</button>

  )
}
