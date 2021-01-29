import React from "react"

import styled from "styled-components"
import Avatar from "../avatar"
import SkillsBar from "../SkillsBar"
import Aboutme from "../Aboutme"
import "../skillbar.css"
import KeySkill from "../keySkill"
import KeySkillsData from "../../data/KeySkills.json"
import {
  TopSkillsContainer,
  InfoAndSkillsSection,
} from "../generalStyling/ProfileSectionStyling"

const Profile = () => (
  <div className="personalInfoBody">
    <div style={{ marginTop: "40px" }}>
      <Avatar />
    </div>
    <h1
      style={{
        backgroundImage: "linear-gradient(45deg, #f3ec78, #af4261)",
        WebkitTextFillColor: "transparent",
        textAlign: "center",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        fontWeight: "900",
        fontSize: "45px",
        marginTop: "50px",
      }}
    >
      Skills
    </h1>

    <TopSkillsContainer>
      {KeySkillsData.map(keySkill => {
        return (
          <KeySkill
            key={keySkill.id}
            label={keySkill.label}
            symbol={keySkill.symbol}
            skillDescription={keySkill.skillDescription}
            fadeInDelay={keySkill.id}
          />
        )
      })}
    </TopSkillsContainer>
    <InfoAndSkillsSection>
      <Aboutme />
      <SkillsBar />
    </InfoAndSkillsSection>
  </div>
)

export default Profile
