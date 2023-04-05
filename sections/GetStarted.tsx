"use client"

import { motion } from "framer-motion"
import { TypingText } from "@/components/CustomText"
import { fadeIn, planetVariants, staggerContainer, slideIn } from "@/utils/motion"
import styles from "@/styles"

export default function GetStarted() {
  return (
    <motion.div initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }} className={`sm:px-16 px-6 ${styles.innerWidth} mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 mt-16 lg:mt-32`}>
      <motion.div
      variants={planetVariants('left')}
      >
        <img src="/get-started.png" />
      </motion.div>
      <motion.div 
      variants={fadeIn('left', 'tween', 0.2, 1)}
      className="flex flex-col gap-5">
        <motion.div
          variants={staggerContainer(0, 0.2)}
        >
          <TypingText title="| How Metaversus Works" />
        </motion.div>

        <div className="text-3xl md:text-6xl font-bold leading-10 md:leading-[4rem]">
          Get started with just a few clicks
        </div>
        <div className="flex items-center gap-5">
          <div className="w-[60px] h-[60px] grid place-items-center bg-gray-700/50 rounded-lg">
            01
          </div>
          <div className="text-gray-500">
            Find a world that suits you <br />
            and you want to hear
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="w-[60px] h-[60px] grid place-items-center bg-gray-700/50 rounded-lg">
            02
          </div>
          <div className="text-gray-500">
            Enter the world by reading <br />
            basmalah to be safe
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="w-[60px] h-[60px] grid place-items-center bg-gray-700/50 rounded-lg">
            03
          </div>
          <div className="text-gray-500">
            No need to beat around the bush, <br />
            just stay on the gas and have fun
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
