import React from "react"
import styled from "styled-components"
import { motion, useAnimation, onDragOver } from "framer-motion"

const StyledContainer = styled.div`
  height: 1000px;
  width: 1000px;
`

const TopSkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  padding-top: 50px;
  border: 2px solid black;
  height: 250px;
  width: 250px;
  border-radius: 10px;
  word-wrap: break-word;
  // position: relative;
  margin-top: 10px;
`

const DiscoBackground = props => {
  const HiControl = useAnimation()
  return (
    <StyledContainer>
      Hi
      <motion.div
        style={{
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          color: "blue",
          content: "",
          margin: "40px auto",
          background: "blue",
        }}
        drag
      ></motion.div>
      <motion.div
        variants={{
          hidden: {
            backgroundColor: "white",
            opacity: 0,
            transition: {
              type: "tween",
              duration: 1,
            },
          },
          dragOver: {
            backgroundColor: "green",
            opacity: 1,
            transition: {
              duration: 1,
            },
          },
        }}
        initial="hidden"
        animate={HiControl}
        onHoverStart={() => {
          HiControl.start({ backgroundColor: "green", duration: 1 })
        }}
        onHoverEnd={() => {
          HiControl.start("hidden")
        }}
      >
        <TopSkillContainer>Hi</TopSkillContainer>
      </motion.div>
      <motion.div>
        <TopSkillContainer>Hi</TopSkillContainer>
      </motion.div>
      <motion.div>
        <TopSkillContainer>Hi</TopSkillContainer>
      </motion.div>
      <motion.div>
        <TopSkillContainer>Hi</TopSkillContainer>
      </motion.div>
      <motion.div>
        <TopSkillContainer>Hi</TopSkillContainer>
      </motion.div>
    </StyledContainer>
  )
}

export default DiscoBackground
