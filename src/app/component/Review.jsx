import React, { useState } from 'react';
import Image from 'next/image';
import star from '../Asset/star.svg';
import star2 from '../Asset/star2.svg';
import downArrow from "../Asset/downArrow.svg"

export const Review = ({ toggleReview, address }) => {
  const [amenity, setAmenity] = useState(true)
  const showAmenities = ()=>{
      setAmenity(!amenity)
  }
  const amenities = ["Parking Lot", "Free wifi", "NightLife", "Hospitals", "Adult","security"]
     return (
          <div className='bg-slate-800 max-w-sreen flex justify-center items-center h-screen bg-blend-hue p-8'>
               <div className=' lg:w-2/5 w-4/5 bg-white mx-auto p-4 '>
                    <h1 className='text-center font-bold'>Review Location</h1>
                    <h2 className='font-semibold text-xl uppercase'>{address}</h2>
                    <form action=''>
                      <div className='flex bg-slate-50 justify-between items-center' onClick={e=> showAmenities()}>
                      <p className='font-semibold capitalize '>special Amenities</p>
                      <Image src={downArrow} alt='dropdown'  />
                      </div>
                         {!amenity && <div className='w-full p-3 mb-2 bg-slate-100'>
                              <div>
                              {amenities?.map(amenity=> {
                                return(
                                  <div className='flex  justify-between items-center w-full' key={amenity}  >
                                 
                                 <div className='w-1/2'> <input type="checkbox" name="" id="" value={amenity} className='mr-2'/>
                                  <label htmlFor="" key={amenity}>{amenity}</label></div>
                                 <div className='w-1/2'>
                                 <input type="checkbox" name="" id="" value={amenity} className='mr-2'/>
                                  <label htmlFor="" key={amenity}>{amenity}</label>
                                 </div>
                                  </div>
                                )
                              })}
                              </div>
                              </div>}
                       
                         <div>
                              <label htmlFor=''>Rating</label>
                              <div className='flex space-x-4 mt-2'>
                                   <Image src={star2} className='w-5'  alt="star"/>
                                   <Image src={star2} className='w-5' alt="star" />
                                   <Image src={star2} className='w-5' alt="star" />
                                   <Image src={star2} className='w-5' alt="star" />
                                   <Image src={star2} className='w-5' alt="star" />
                              </div>
                         </div>
                         <div className='mt-3 spce-y-2'>
                          <p className='text-sm mb-2'>Write Review</p>
                         <textarea name='' id=''  className='border w-full h-36 rounded-xl'></textarea>
                         </div>
                         <div className='my-2'>
                          <input type="checkbox" className='mr-2' />
                          <label htmlFor="">Post as Anonymous</label>
                         </div>
                         <div className='flex justify-between space-x-4 items-center'>
                          <button className=' bg-blue-600 text-white font-semibold w-full rounded-md p-2 capitalize'>submit</button>
                          <button className='text-blue-600 font-semibold w-full rounded-md border p-2 capitalize border-blue-600' onClick={toggleReview} >cancel</button>
                         </div>
                    </form>
               </div>
          </div>
     );
};
