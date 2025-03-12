import React from 'react'
import {motion} from 'framer-motion'

export const Athul = () => {
  return (
    <motion.div 
    whileInView={{opacity:1,x:100}}
    initial={{opacity:0,x:0}}
    transition={{duration:9}}


    
    >Athul</motion.div>
  )
}
