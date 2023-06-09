"use client"

import { heroSocials } from "@/constants"
import styles from "@/styles"
import {
  navVariants,
  slideIn,
  staggerContainer,
  textVariant,
} from "@/utils/motion"
import { motion } from "framer-motion"
import { TypingText } from "@/components/CustomText"

export default function Hero() {
  return (
    <div className="lg:h-screen relative">
      <div
        className={`${styles.xPaddings} ${styles.innerWidth} mx-auto flex lg:flex-row flex-col justify-between items-start lg:items-center mt-24`}
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={navVariants}
          className="text-[#C7C7C780] opacity-50"
        >
          <motion.div
            variants={staggerContainer(1, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="lg:pl-10"
          >
            <TypingText title="| Home" />
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={navVariants}
          className="lg:grid flex mt-3 gap-5 place-items-center"
        >
          {heroSocials.map((social) => (
            <a href={social.link} key={social.name}>
              <img src={social.url} />
            </a>
          ))}
        </motion.div>
      </div>
      <div className="flex flex-col-reverse">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={slideIn("right", "spring", 0, 2)}
          className="relative"
        >
          <img
            className="lg:h-[488px] md:h-[400px] h-[300px] w-[2000px] object-cover rounded-tl-[140px] rounded-bl-[42px] mt-[-60px] md:mt-[-40px] lg:ml-[100px] md:ml-[60px] ml-[40px]"
            src="/cover.png"
            alt="cover"
          />
          <img
            className="absolute bottom-0 right-[10%] md:w-[150px] w-[100px] translate-y-2/4"
            src="/stamp.png"
          />
        </motion.div>

        <div className="container mx-auto text-center font-bold text-5xl md:text-8xl lg:text-[130px] py-5 leading-none lg:mt-[-90px] z-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={textVariant(1.1)}
          >
            METAVERSE
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={textVariant(1.2)}
          >
            MA
            <div className="lg:w-[212px] md:w-[155px] w-[80px]  lg:h-[108px] md:h-[80px] h-[45px] lg:border-[18px] md:border-[14px] border-[10px] border-solid border-white rounded-r-[50px] inline-block" />
            NESS
          </motion.div>
        </div>
      </div>
    </div>
  )
}
