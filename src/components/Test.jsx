import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { div } from 'framer-motion/client'

const Test = () => {
    const [data,setdata]=useState(null)
    const [error,seterror]=useState(null)
    const[loading,setloading]=useState(true)

    useEffect(()=>{
        const fetchdata=async()=>{
            try {
                const response= await axios.get('https://jsonplaceholder.typicode.com/users')
                setdata(response.data)
                console.log(response.data,"dtaa")
            } catch (error) {
                seterror(error)
            }

    }
    fetchdata()
    },[])
    // if(loading){
    //     return <p>loading.....</p>
    // }
    if(error){
        return <p>error...</p>
    }
  return (
    <div>
        <ul>
            {data[0].map((item)=>{
                <li key={item.id}>
                    <p>{item.name}</p>
                </li>
            })}
        </ul>
    </div>
  )
}

export default Test