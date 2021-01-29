import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import ProjectTBF from "./projects/projectTBF"
import ProjectMafia from "./projects/projectMafia"
import ProjectFloFitness from "./projects/projectFloFitness"
import {
  ProjectsContainer,
  PaddingWrapper,
  TitleStyle,
} from "./projects/componentStyles"

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
    </ProjectsContainer>
  </div>
)

export default Projects
