import React from 'react'
import { Card } from './Card'
import useFetch from './useFetch'
export const CardArray = () => {
    const {data,loading,error} = useFetch("http://localhost:4000/comment")
    alert(data)
return(
   
    <section>
     
    </section>
)

}
