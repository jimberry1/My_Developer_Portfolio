import React, { useEffect } from "react"
import styled from "styled-components"
import "./skillbar.css"
import FadeInWhenVisible from "./FadeInWhenVisible"
import {
  motion,
  AnimatePresence,
  useAnimation,
  useViewportScroll,
} from "framer-motion"
import { useInView } from "react-intersection-observer"

const skillsVariants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    originX: 0,
    transition: { duration: 1, delay: 0.3 },
  },
  hover: {
    textShadow: "0px 0px 8px rgb(255, 255, 255)",
    boxShadow: "0px 0px 8px rgb(255, 255, 255)",
  },
}

const SkillBar = props => {
  const SkillBar = styled.div`
    height: 20px;
    width: ${props => props.skillRating}%;
    background: green;
    border-radius: 5px;
    content: "";
    box-shadow: "0px 0px 8px rgb(255, 255, 255)";
  `
  const SkillTitle = styled.span`
    font-size: 25px;
    color: white;
    margin-bottom: 5px;
    margin-left: 15px;
    transition: 0.4s;
  `

  const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px;
    margin-top: 5px;
    &:hover {
      ${SkillTitle} {
        color: red;
      }
    }
  `

  const controls = useAnimation()

  console.log(props.shouldAnimate)

  useEffect(() => {
    if (props.shouldAnimate) {
      console.log("running controls.startAnimate")
      controls.start("visible")
    }
  }, [props])

  return (
    <SkillsContainer>
      <SkillTitle>{props.skillTitle}</SkillTitle>

      <div
        style={{
          background: "lightgray",
          maxWidth: "100%",
          borderRadius: "5px",
          height: "20px",
        }}
      >
        <motion.div
          variants={skillsVariants}
          initial="hidden"
          animate={controls}
          whileHover="hover"
        >
          {/* <SkillBar skillRating={props.skillRating * 10} /> */}
          <div
            className="skillbar"
            style={{ width: `${props.skillRating * 10}%` }}
          />
        </motion.div>
      </div>
    </SkillsContainer>
  )
}

export default SkillBar
