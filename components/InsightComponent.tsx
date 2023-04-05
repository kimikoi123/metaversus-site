import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'

interface InsightProps {
    imgUrl: string
    title: string
    subtitle: string
    index: number
}

export default function InsightComponent({ imgUrl, title, subtitle, index } : InsightProps) {
  return (
    <motion.div
    variants={fadeIn('up', 'spring', 0.5 * index, 1)}
     className='flex flex-col sm:flex-row items-center justify-between gap-10'>
        <img className='w-screen sm:w-[150px] h-[150px] object-cover object-center rounded-lg' src={imgUrl} alt="image" />
        <div className='max-w-[800px] flex flex-col gap-4'>
            <div className='text-3xl'>{title}</div>
            <div className='text-[#C7C7C780]'>{subtitle}</div>
        </div>
        <button className='hidden min-w-[80px] min-h-[80px] md:grid place-items-center rounded-full border'>
            <img src='/arrow.svg' alt='arrow' />
        </button>
    </motion.div>
  )
}
