"use client"
import React from 'react'

export const Search = ({address, setAddress}) => {
  return (
    <input
                                   type='search'
                                   className='border block w-3/5 p-2 rounded-md bg-slate-50 text-sm'
                                   placeholder='Enter Address'
                                   value={address}
                                   onInput={(e)=>setAddress(e.target.value)}
                              />
  )
}
