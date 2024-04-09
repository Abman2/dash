import React from 'react';
import Image from 'next/image';
import star from '../Asset/star.svg';
import message from '../Asset/message.svg';
import like from '../Asset/like.svg';
import dislike from "../Asset/dislike.svg"

export const CommentCard = ({avatar,name,review,likes,comments,dislikes,starRating}) => {
     return (
          <section className='bg-white  p-3 border-b-2'>
               <article className='flex justify-between space-x-1 mb-3'>
                    <aside className='flex items-center'>
                         <Image src={avatar}   alt='avatar' width={3} height={3} className='me-2 rounded-full w-7 h-7' />
                         <div className='flex items-center space-x-2'>
                              <b>{name}</b>
                              <small>5 months ago</small>
                         </div>
                    </aside>
                    <aside>
                         <small className='flex mt-1 space-x-1'>
                              <Image src={star} alt='star' />
                              <small className=' text-base'>{starRating}</small>
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
                       
                    </aside>
               </article>
          </section>
     );
};
