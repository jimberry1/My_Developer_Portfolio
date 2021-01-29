import React, { useState, useEffect } from "react"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const FadeInWhenVisible = ({ children, delay }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{
        duration: 0.3 * delay,
        when: "beforeChildren",
      }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </motion.div>
  )
}

export default FadeInWhenVisible
