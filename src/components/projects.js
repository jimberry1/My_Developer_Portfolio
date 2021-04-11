import React from "react"
import ProjectTBF from "./projects/projectTBF"
import ProjectMafia from "./projects/projectMafia"
import ProjectFloFitness from "./projects/projectFloFitness"
import {
  ProjectsContainer,
  PaddingWrapper,
  TitleStyle,
} from "./projects/componentStyles"
import ProjectTicTacToe from "./projects/projectTicTacToe"
import ProjectLibrary from "./projects/projectLibrary"
import ProjectCraftArt from "./projects/projectCraftArt"
import ProjectPsych2 from "./projects/projectPsych"
import ProjectPtPlanner from "./projects/projectPtPlanner"

const Projects = () => (
  <div
  // style={{ background: "#D74992" }} // this looks nice but need to sort of transitions between top and bottom before adding it
  >
    <TitleStyle>Projects</TitleStyle>

    <ProjectsContainer>
      <PaddingWrapper>
        <ProjectCraftArt />
      </PaddingWrapper>
      <PaddingWrapper>
        <ProjectPsych2 />
      </PaddingWrapper>
      <PaddingWrapper>
        <ProjectPtPlanner />
      </PaddingWrapper>
      <PaddingWrapper>
        <ProjectTBF />
      </PaddingWrapper>
      <PaddingWrapper>
        <ProjectFloFitness />
      </PaddingWrapper>
      <PaddingWrapper>
        <ProjectMafia />
      </PaddingWrapper>
      <PaddingWrapper>
        <ProjectTicTacToe />
      </PaddingWrapper>
      <PaddingWrapper>
        <ProjectLibrary />
      </PaddingWrapper>
    </ProjectsContainer>
  </div>
)

export default Projects
