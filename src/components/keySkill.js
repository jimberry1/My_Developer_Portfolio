import React from "react"
import FadeInWhenVisible from "./FadeInWhenVisible"
import { motion } from "framer-motion"
import styled from "styled-components"
import Emoji from "./Emoji"

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
const SkillName = styled.h2`
  align-self: flex-end;
  font-size: 30px;
  text-align: center;
  // position: absolute;
  color: white;
  word-wrap: break-word;
`

const KeySkill = ({ symbol, label, fadeInDelay, skillDescription }) => {
  return (
    <div>
      <FadeInWhenVisible delay={fadeInDelay}>
        <motion.div
          //   drag
          //   dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          //   dragElastic={1.2}
          whileHover="hover"
          whileTap="tap"
          variants={{
            hover: {
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255, 255, 255)",
              boxShadow: "0px 0px 8px rgb(255, 255, 255)",
            },
            tap: {
              scale: [1, 1.4],
              rotate: [0, -15, 15, -30, 30, -15, 15, 0],
              transition: {
                duration: 2,
                yoyo: 10,
              },
            },
          }}
        >
          <TopSkillContainer>
            <Emoji label={label} symbol={symbol} />
            <SkillName>{skillDescription}</SkillName>
          </TopSkillContainer>
        </motion.div>
      </FadeInWhenVisible>
    </div>
  )
}

export default KeySkill
