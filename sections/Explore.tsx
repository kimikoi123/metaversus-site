"use client"

import { TypingText } from "@/components/CustomText"
import styles from "@/styles"
import { exploreWorlds } from "@/constants"
import WorldCard from "@/components/WorldCard"
import { useState } from "react"
import { motion } from "framer-motion"
import { staggerContainer, textVariant } from "@/utils/motion"

export default function Explore() {
  const [active, setActive] = useState('world-1')

  function handleClick(id: string) {
    setActive(id)
  }

  return (
    <div className={`${styles.xPaddings} pt-12 container mx-auto`}>
      <motion.div 
      variants={staggerContainer(0, .2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="text-center">
        <TypingText title="| The World" />
        <motion.h1 
        variants={textVariant(0.25)}
        initial="hidden"
        whileInView="show"
        className="text-center text-4xl md:text-6xl font-bold">
          Choose the world you want <br />
          to explore
        </motion.h1>
      </motion.div>
      <div className="h-[700px] xl:h-[700px] flex flex-col xl:flex-row gap-4 mt-20 ">
        {exploreWorlds.map((world, index) => (
          <WorldCard key={world.id} index={index} active={active} handleClick={handleClick} {...world} />
        ))}

      </div>
    </div>
  )
}
