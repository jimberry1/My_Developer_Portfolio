import React, { useState } from "react"
import Skill from "./skill"
import "./skills.css"
import skillsData from "./skillsData.json"

const Skills = props => {
  const [skillLevel, setSkillLevel] = useState(false)
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="skills__skillHighlightButtonContainer">
        <button
          className="skills__skillHighlightButton"
          onClick={() => setSkillLevel(curVal => !curVal)}
        >
          {skillLevel ? "Show all skills" : "Show advanced skills"}
        </button>
      </div>
      <div className="skills__container">
        {skillsData.map(skill => (
          <Skill
            key={skill.id}
            skill={skill.skill}
            skillLevel={skill.level}
            isAdvancedSkillSelected={skillLevel}
          />
        ))}
      </div>
    </div>
  )
}

export default Skills
