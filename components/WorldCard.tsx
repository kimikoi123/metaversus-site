"use client"

import { motion } from "framer-motion"
import { fadeIn } from "@/utils/motion"

interface WorldCardProps {
  id: string
  imgUrl: string
  title: string
  handleClick: (id: string) => void
  active: string
  index: number
}

export default function WorldCard({
  id,
  imgUrl,
  title,
  handleClick,
  active,
  index,
}: WorldCardProps) {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      onClick={() => handleClick(id)}
      className={`${
        active === id ? "flex-1" : ""
      } bg-cover bg-center flex flex-col justify-end rounded-3xl cursor-pointer transition-all duration-250`}
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <div
        className={`${
          active === id ? "hidden" : ""
        } text-3xl font-bold xl:-rotate-90 py-5 xl:py-0 text-center xl:text-left xl:mb-44`}
      >
        {title}
      </div>
      <div
        className={`${
          active !== id ? "hidden" : ""
        } h-2/4 xl:h-1/4 bg-black/20 gap-3 p-5`}
      >
        <div className="bg-white/20 inline-block rounded-3xl">
          <img className="p-3" src="/headset.svg" />
        </div>
        <div className="py-4">ENTER METAVERSE</div>
        <div className="text-2xl font-bold">{title}</div>
      </div>
    </motion.div>
  )
}
