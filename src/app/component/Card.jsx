import React from 'react';
import Image from 'next/image';
import star from '../Asset/star.svg';
import message from '../Asset/message.svg';
import like from '../Asset/like.svg';

export const Card = () => {
     return (
          <section className='bg-slate-50 rounded'>
               <article className='flex justify-between'>
                    <aside className='flex '>
                         <Image src='' alt='avatar' />
                         <div className='flex flex-col'>
                              <b>James T.</b>
                              <small>5 months ago</small>
                         </div>
                    </aside>
                    <aside>
                         <b>Ikate,Lekki</b>
                         <small className='flex'>
                              <Image src={star} alt='star' />
                              <Image src={star} alt='star' />
                              <Image src={star} alt='star' />
                              <Image src={star} alt='star' />
                              <Image src={star} alt='star' />
                         </small>
                    </aside>
               </article>
               <article>
                    <p>See through the lenses of people who have lived or visited the neighbourhood you might have in mind.</p>
                    <aside className='flex justify-between'>
                         <div className='flex'>
                              <Image src={like} alt='like' />
                              <small>24</small>
                              <Image src='' alt='dislike' />
                              <small>25</small>
                              <Image src={message} alt='message' />
                              <small>26</small>
                         </div>
                         <div>
                              <button>power</button>
                         </div>
                    </aside>
               </article>
          </section>
     );
};
