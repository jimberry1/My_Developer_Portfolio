import React from "react"

export const titleVariants = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      type: "spring",
      stifness: 120,
      dampening: 8,
    },
  },
}

export const seeMoreVariants = {
  hidden: {
    x: "-100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1,
      type: "spring",
      stifness: 120,
      dampening: 8,
    },
  },
}
