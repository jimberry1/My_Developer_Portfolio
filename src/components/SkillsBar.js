import React, { useEffect, useState } from "react"
import styled from "styled-components"
import SkillBar from "./SkillBar"
import { motion } from "framer-motion"
import skillsData from "./Skills/skillsData.json"
import FadeInWhenVisible from "./FadeInWhenVisible"
import { useInView } from "react-intersection-observer"

const skillsVariants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    originX: 0,
    transition: { duration: 1, delay: 0.5 },
  },
}

const SkillTitle = styled.span`
  font-size: 25px;
  color: gray;
`

const SkillsContainer = styled.div`
  width: 50%;
  flex: 1;
  padding: 0px 5%;

  @media (max-width: 1000px) {
    width: 80%;
    font-size: 25px;
    text-align: center;
  }
`

const SkillsBar = props => {
  const [shouldAnimate, setShouldAnimate] = useState(false)
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      setShouldAnimate(true)
    }
  }, [inView])

  return (
    <SkillsContainer>
      <h1
        style={{
          backgroundImage: "linear-gradient(45deg, #f3ec78, #af4261)",
          WebkitTextFillColor: "transparent",
          textAlign: "center",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          fontWeight: "900",
          fontSize: "45px",
          padding: "20px",
        }}
      >
        Tech Stack
      </h1>
      <div style={{ overflow: "scroll", height: "400px" }} ref={ref}>
        {skillsData.map(skill => {
          return (
            <SkillBar
              skillRating={skill.level}
              skillTitle={skill.skill}
              shouldAnimate={shouldAnimate}
            />
          )
        })}
      </div>
    </SkillsContainer>
  )
}

export default SkillsBar
