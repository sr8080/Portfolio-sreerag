import React from 'react'
import { CONTACT } from '../constants'
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
    <motion.h1 
     whileInView={{opacity:1,y:0}}
     initial={{opacity:0,y:-100}}
     transition={{duration:1.5}}
    className="my-20 text-center text-4xl">Get in touch</motion.h1>
    <motion.div className='text-center tracking-tighter'>
        <motion.p 
         whileInView={{opacity:1,x:0}}
         initial={{opacity:0,x:-100}}
         transition={{duration:1.5}}
        className='my-4'>{CONTACT.address}</motion.p >
        <motion.p 
         whileInView={{opacity:1,x:0}}
         initial={{opacity:0,x:100}}
         transition={{duration:1.5}}
        className='my-4'>{CONTACT.phoneNo}</motion.p >
        <motion.a href="" className='border-b'>{CONTACT.email}</motion.a>
    </motion.div>

    </div>
  )
}

export default Contact