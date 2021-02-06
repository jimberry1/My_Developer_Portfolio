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

const Projects = () => (
  <div>
    <TitleStyle>Projects</TitleStyle>

    <ProjectsContainer>
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
