import React from 'react';
import { SiMongodb } from 'react-icons/si';
import { RiReactjsLine } from 'react-icons/ri';
import { FaNodeJs, FaServer, FaDatabase } from 'react-icons/fa';
import { animate, motion } from "framer-motion";

const iconVariants = (duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat: Infinity,
            repeatType:"reverse"
        },
    },
})

const Tech = () => {
  console.log('Tech component rendered');
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h2 className='my-20 text-center text-4xl'>Technologies</h2>
      <motion.div className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div
        variants={iconVariants(2.4)}
        initial="initial"
        animate = 'animate'
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiMongodb className='text-7xl text-green-500'/>
        </motion.div>
        <motion.div
        variants={iconVariants(2.7)}
        initial="initial"
        animate = 'animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaServer className='text-7xl text-yellow-500'/>
        </motion.div>
        <motion.div
        variants={iconVariants(3)}
        initial="initial"
        animate = 'animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiReactjsLine className='text-7xl text-cyan-400'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(5)}
        initial="initial"
        animate = 'animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaNodeJs className='text-7xl text-green-500'/>
        </motion.div>
        <motion.div
        variants={iconVariants(1.2)}
        initial="initial"
        animate = 'animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaDatabase className='text-7xl text-cyan-400'/>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Tech;
