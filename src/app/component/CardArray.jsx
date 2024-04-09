import React from 'react';
import { Card } from './Card';
export async function getData(url) {
     const res = await fetch(url, { next: { revalidate: 0 } });
     return res.json();
}
export default async function CardArray() {
     const comments = await getData('https://abman2.github.io/repo-exercise/addresses.json');
     const details= comments.filter(x=>x.address.toLowerCase()=="bangladesh".toLowerCase())
   const comment = details.map(x=>x.comment)

     return (
          <section className='grid grid-cols-2 p-1  gap-5 lg:w-2/5 max-w-md mx-auto h-screen lg:h-full overflow-hidden lg:absolute -top-10 right-0 bg-slate-100'>
               {comment[0]?.map((comment) => {
                    return (
                         <Card
                              avatar={comment.avatar}
                              key={comment.name}
                              name={comment.name}
                              review={comment.review}
                              likes={comment.likes}
                              dislikes={comment.dislikes}
                              starRating={comment.starRating}
                              sector={comment.sector}
                              location={comment.location}
                              comments={comment.comments}
                         />
                    );
               })}
          </section>
     );
}
