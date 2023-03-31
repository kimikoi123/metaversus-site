import { motion } from "framer-motion"
import { textContainer, textVariant, textVariant2 } from "@/utils/motion"

export function TypingText({ title }: { title: string }) {
  return (
    <motion.div variants={textContainer}>
      {Array.from(title).map((letter, index) => (
        <motion.span key={index} variants={textVariant2}>{letter}</motion.span>
      ))}
    </motion.div>
  )
}
