'use client'

import { socials } from "@/constants"
import styles from "@/styles"
import { fadeIn } from "@/utils/motion"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.div 
    initial="hidden"
    whileInView="show"
    variants={fadeIn('up', 'tween', 0.25, 1)}
    className={`${styles.innerWidth} mx-auto mt-52 flex flex-col gap-10 sm:px-16 px-6`}>
      <div className="flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between items-start md:items-center">
        <div className="text-3xl font-bold">Enter the Metaverse</div>
        <button className="flex gap-3 py-4 px-6 bg-[#25618B] rounded-full"><img src="/headset.svg" alt="" /> ENTER METAVERSE</button>
      </div>
      <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row items-center justify-between py-8 border-t border-gray-700">
        <div className="font-bold">METAVERUS</div>
        <div>Copyright © 2021 - 2022 Metaversus. All rights reserved.</div>
        <div className="flex gap-5">
          {socials.map(social => (
            <a key={social.name} href="#"><img src={social.url} alt="" key={social.name} /></a>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
