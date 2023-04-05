"use client"

import InsightComponent from "@/components/InsightComponent"
import { insights } from "@/constants"
import styles from "@/styles"
import { motion } from "framer-motion"
import { TypingText } from "@/components/CustomText"
import { fadeIn, staggerContainer } from "@/utils/motion"

export default function Insights() {
  return (
    <motion.div 
    initial="hidden"
    whileInView="show"
    className={`${styles.innerWidth} mx-auto flex flex-col items-center gap-5 sm:px-16 px-6`}>
      <TypingText title="| Insight" />
      <motion.div 
      variants={fadeIn('up', 'tween', 0.25, 1)}
      className="mt-10 md:mt-0 text-3xl md:text-6xl font-bold mb-10">Insight about metaverse</motion.div>
      <motion.div
      variants={staggerContainer(0, 0.25)}
      className="flex flex-col gap-5">
        {insights.map((insight, index) => (
          <InsightComponent key={index} {...insight} index={index}/>
        ))}
      </motion.div>
    </motion.div>
  )
}
