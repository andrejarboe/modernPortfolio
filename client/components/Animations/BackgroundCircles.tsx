import { motion } from 'framer-motion'
import React from 'react'


type Props = {}

function BackgroundCircles({ }: Props) {
    return (
        <motion.div
            className="relative flex justify-center items-center"
            initial={{ opacity: 0 }}
            transition={{ duration: 2.5 }}
            whileInView={{ opacity: 1 }}
            animate={{
                scale: [1, 2, 2, 3, 1],
                opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
                borderRadius: ["20%", "20%", "50%", "80%", "20%"],
            }}
        >
            <div className='absolute border border-primary rounded-full mt-52 h-[200px] w-[200px] animate-ping' />
            <div className='absolute border border-primary rounded-full mt-52 h-[300px] w-[300px]' />
            <div className='absolute border border-primary rounded-full mt-52 h-[500px] w-[500px]' />
            <div className='absolute border border-secondary opacity-20 rounded-full mt-52 h-[650px] w-[650px] animate-pulse' />
            <div className='absolute border border-primary rounded-full mt-52 h-[800px] w-[800px]' />
        </motion.div>
    )
}

export default BackgroundCircles