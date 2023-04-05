'use client'

import { TypingText } from "@/components/CustomText"
import styles from "@/styles"
import { fadeIn, planetVariants } from "@/utils/motion"
import { motion } from 'framer-motion'

export default function WhatsNew() {
  return (
    <motion.div 
    initial="hidden"
    whileInView="show"
    className={`${styles.innerWidth} sm:px-16 px-6 mx-auto mt-14 lg:mt-0 grid grid-cols-1 lg:grid-cols-2 items-center`}>
      <motion.div 
      variants={fadeIn('right', 'tween', 0.2, 1)}
      className="flex flex-col gap-4">
        <TypingText title="| Whats New?" />
        <div className="text-3xl md:text-6xl font-bold leading-10 md:leading-[4rem]">What's new about Metaversus?</div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-4 md:max-w-[15rem]">
            <div className="w-[60px] h-[60px] grid place-items-center bg-gray-700/50 rounded-lg">
              <img src="/vrpano.svg" />
            </div>
            <div className="text-xl">A new world</div>
            <div className="text-gray-500">we have the latest update with new world for you to try never mind</div>
          </div>
          <div className="flex flex-col gap-4 md:max-w-[15rem]">
            <div className="w-[60px] h-[60px] grid place-items-center bg-gray-700/50 rounded-lg">
              <img src="/headset.svg" />
            </div>
            <div className="text-xl">More realistic</div>
            <div className="text-gray-500">In the latest update, your eyes are narrow, making the world more realistic than ever</div>
          </div>
        </div>
      </motion.div>
      <motion.div
      variants={planetVariants('right')}
      >
        <img src="/whats-new.png" />
      </motion.div>
    </motion.div>
  )
}
