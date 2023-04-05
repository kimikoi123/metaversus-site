"use client"

import { TypingText } from "@/components/CustomText"
import styles from "@/styles"
import { motion } from "framer-motion"

export default function World() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col justify-center items-center gap-5 sm:px-16 px-6`}
    >
      <TypingText title="| People on World" />
      <div className="mx-auto text-3xl md:text-6xl font-bold leading-10 md:leading-[4rem] text-center mb-20">
        Track friends around you and invite them to play together in the same
        world
      </div>
      <div className="relative">
        <img className="" src="/map.png" />
        <div className="absolute scale-50 sm:scale-100 top-0 lg:top-20 left-10 lg:left-40">
          <div className="relative">
            <img className="" src="/union.png" />
            <img
              className="absolute top-4 left-8 w-[50px]"
              src="/people-01.png"
            />
          </div>
        </div>
        <div className="absolute scale-50 sm:scale-100 top-1/2 left-1/2">
          <div className="relative">
            <img className="" src="/union.png" />
            <img
              className="absolute top-4 left-8 w-[50px]"
              src="/people-02.png"
            />
          </div>
        </div>
        <div className="absolute scale-50 sm:scale-100 bottom-5 md:bottom-1/4 right-5 md:right-10 lg:right-40">
          <div className="relative">
            <img className="" src="/union.png" />
            <img
              className="absolute top-4 left-8 w-[50px]"
              src="/people-03.png"
            />
          </div>
        </div>
        <div className="bg-gray-700 scale-75 md:scale-100 inline-block p-2 rounded-lg absolute top-1/2 left-10 md:left-28 lg:left-60">
          <div className="min-w-[150px] min-h-[100px] bg-cover bg-center rounded-lg p-2 flex flex-col gap-2 justify-end bg-[url('/planet-02.png')]">
            <div className="text-xs flex items-center gap-10 relative">
              <img className="w-[30px] z-30" src="/people-01.png" alt="" />
              <img className="w-[30px] z-20 left-4 absolute" src="/people-02.png" alt="" />
              <img className="w-[30px] z-10 left-8 absolute" src="/people-01.png" alt="" />
              <div>+265 has joined</div>
            </div>
            <div className="font-bold font-sm">The Upside Down</div>
          </div>
        </div>
        <div className="bg-gray-700 scale-75 md:scale-100 inline-block p-2 rounded-lg absolute top-0 lg:top-20 right-20 lg:right-60">
          <div className="min-w-[150px] min-h-[100px] bg-cover bg-center rounded-lg p-2 flex flex-col gap-2 justify-end bg-[url('/planet-03.png')]">
            <div className="text-xs flex items-center gap-10 relative">
              <img className="w-[30px] z-30" src="/people-03.png" alt="" />
              <img className="w-[30px] z-20 left-4 absolute" src="/people-02.png" alt="" />
              <img className="w-[30px] z-10 left-8 absolute" src="/people-01.png" alt="" />
              <div>+265 has joined</div>
            </div>
            <div className="font-bold font-sm">Hawkins Labs</div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
