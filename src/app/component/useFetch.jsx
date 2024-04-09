"use client"
import { useState,useEffect } from "react";

export  const useFetch = (url) => {
    const [data, setData] = useState([]);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);
     useEffect(() => {
          fetch(url)
               .then((resp) => {
                    if (!resp) {
                         throw Error('could not fetch data from source');
                    }
                    
                         return resp.json();
                    
               })
               .then((data) => {
                    setData(data);
                    setLoading(false);
                    setError(null);
               })
               .catch((err) => {
                    setLoading(false);
                    setError(err.message);
               });
     }, []);
  return (
   {data,loading,error}
  )
}
