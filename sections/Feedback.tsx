'use client'

import styles from "@/styles"

export default function Feedback() {
  return (
    <div className={`${styles.innerWidth} flex flex-col lg:flex-row mx-auto gap-10 mt-36 sm:px-16 px-6`}>
      <div className="p-8 bg-gray-700/50 border border-gray-500 rounded-3xl flex flex-col justify-end gap-2 w-100 lg:max-w-[400px]">
        <div className="text-5xl font-bold">Samantha</div>
        <div className="text-xl mb-5">Founder Metaverus</div>
        <div className="text-2xl leading-10">“With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything”</div>
      </div>
      <div className="relative">
        <img className="rounded-3xl h-[600px] object-cover" src="/planet-09.png" alt="" />
        <img className="hidden lg:block absolute top-20 left-0 -translate-x-1/2 max-w-[150px]" src="/stamp.png" alt="" />
      </div>
    </div>
  )
}
