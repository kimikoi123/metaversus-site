"use client"

import { motion } from "framer-motion"
import { navVariants } from "../utils/motion"
import styles from "@/styles/index"

export default function Navbar() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={navVariants}
      className={`${styles.xPaddings} container mx-auto flex justify-between items-center pt-6`}
    >
      <img className="text-black" src="/search.svg" alt="search" />
      <div className="text-white text-2xl font-extrabold">METAVERSUS</div>
      <img className="text-black" src="/menu.svg" alt="menu" />
    </motion.div>
  )
}
