"use client"
import React from 'react'

export const Search = ({address, setAddress}) => {
  return (
    <input
                                   type='search'
                                   className='border block md:w-3/5  w-4/5 p-2 rounded-md bg-slate-50 text-sm px-5'
                                   placeholder='Enter Address'
                                   value={address}
                                   onInput={(e)=>setAddress(e.target.value)}
                              />
  )
}
