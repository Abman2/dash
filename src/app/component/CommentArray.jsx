import React from 'react'
import { CommentCard } from './CommentCard'

export  function CommentArray ({comment}) {
    


  return (
    comment[0]?.map((datum) => {
                    return (
                         <CommentCard
                              avatar={datum.avatar}
                              key={datum.name}
                              name={datum.name}
                              review={datum.review}
                              likes={datum.likes}
                              dislikes={datum.dislikes}
                              starRating={datum.starRating}
                              sector={datum.sector}
                              location={datum.location}
                              comments={datum.comments}
                         />
                    );
               })
               
  )
}
