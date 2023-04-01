"use client"

import { motion } from "framer-motion"
import { textContainer, staggerContainer, slideIn, fadeIn, textVariant } from "@/utils/motion"
import styles from "@/styles"
import { TypingText } from "@/components/CustomText"

export default function About() {
  return (
    <div className={`${styles.innerWidth} ${styles.xPaddings} mt-20 lg:mt-0 mx-auto`}>
      <motion.div
        variants={staggerContainer(0, .2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="text-center py-5 text-[#C7C7C780]" 
      >
        <TypingText title="| About Metaversus" />
      </motion.div>
      <motion.div 
      variants={textVariant(.25)}
      initial="hidden"
      whileInView="show"
      className="text-center text-xl lg:text-3xl text-[#C7C7C7] leading-8 lg:leading-[58px]">
        <span className="text-white font-extrabold">Metaverse</span> is a new
        thing in the future, where you can enjoy the virtual world by feeling
        like it's really real, you can feel what you feel in this metaverse
        world, because this is really the{" "}
        <span className="text-white font-extrabold">
          madness of the metaverse
        </span>{" "}
        of today, using only{" "}
        <span className="text-white font-extrabold">VR</span> devices you can
        easily explore the metaverse world you want, turn your dreams into
        reality. Let's{" "}
        <span className="text-white font-extrabold">explore</span> the madness
        of the metaverse by scrolling down
      </motion.div>
    </div>
  )
}
