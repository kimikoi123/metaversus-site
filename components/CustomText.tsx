import { motion } from "framer-motion"
import { textContainer, textVariant, textVariant2 } from "@/utils/motion"

export function TypingText({ title }: { title: string }) {
  return (
    <motion.p variants={textContainer}>
      {Array.from(title).map((letter, index) => (
        <motion.span key={index} variants={textVariant2} className="text-[#C7C7C780]">
          {letter}
        </motion.span>
      ))}
    </motion.p>
  )
}
