import React from 'react';
import Image from 'next/image';
import star from '../Asset/star.svg';
import message from '../Asset/message.svg';
import like from '../Asset/like.svg';
import dislike from "../Asset/dislike.svg"

export const Card = ({avatar,name,review,likes,comments,dislikes,starRating,location,sector}) => {
     return (
          <section className='bg-white rounded-md  p-3 '>
               <article className='flex justify-between text-xs space-x-1 mb-3'>
                    <aside className='flex items-center'>
                         <Image src={avatar}   alt='avatar' width={3} height={3} className='me-2 rounded-full w-7 h-7' />
                         <div className='flex flex-col'>
                              <b>{name}</b>
                              <small>5 months ago</small>
                         </div>
                    </aside>
                    <aside>
                         <b>{location}</b>
                         <small className='flex mt-1'>
                              <Image src={star} alt='star' />
                              <Image src={star} alt='star' />
                              <Image src={star} alt='star' />
                              <Image src={star} alt='star' />
                              <Image src={star} alt='star' />
                         </small>
                    </aside>
               </article>
               <article>
                    <p>{review}</p>
                    <aside className='flex justify-between mt-3'>
                         <div className='flex space-x-2'>
                              <div className='flex space-x-2'>
                              <Image src={like} alt='like' />
                              <small>{likes}</small>
                              </div>
                              <div className='flex space-x-2'>
                              <Image src={dislike} alt='dislike' />
                              <small>{dislikes}</small>
                              </div>
                              <div className='flex space-x-2'>
                              <Image src={message} alt='message' />
                              <small>{comments}</small>
                              </div>
                         </div>
                         <div>
                              <button className=" rounded-3xl bg-red-500 text-xs px-4 font-semibold border border-slate-300">{sector}</button>
                         </div>
                    </aside>
               </article>
          </section>
     );
};
