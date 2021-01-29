import React from "react"
import "./skill.css"

const Skill = ({ skill, skillLevel, isAdvancedSkillSelected }) => {
  let skillDivStyling = "skill__skillContainer"
  if (isAdvancedSkillSelected) {
    if (skillLevel === "ADVANCED") {
      skillDivStyling = "skill__skillContainer skill__advancedSkillContainer"
    } else {
      skillDivStyling = "skill__skillContainer skill__beginnerSkillContainer"
    }
  }
  return (
    <div className={skillDivStyling}>
      <p className="skill__skillTag">{skill}</p>
    </div>
  )
}

export default Skill
