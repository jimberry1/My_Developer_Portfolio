import BackgroundImage from "gatsby-background-image"
import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {
  ProjectContainer,
  LearnMoreContainer,
  TitleContainer,
  BackgroundImageInnerContainer,
} from "./componentStyles"

const ProjectMafia = props => (
  <StaticQuery
    query={graphql`
      query mafiaImageQuery {
        file(
          childImageSharp: { gatsbyImageData: {} }
          relativePath: { eq: "mafiaLogo.jpeg" }
        ) {
          id
          childImageSharp {
            fluid(base64Width: 10) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <ProjectContainer>
          <BackgroundImage
            fluid={data.file.childImageSharp.fluid}
            style={{ height: "100%" }}
          >
            <BackgroundImageInnerContainer>
              <TitleContainer>Mafia</TitleContainer>
              <LearnMoreContainer>Learn more</LearnMoreContainer>
            </BackgroundImageInnerContainer>
          </BackgroundImage>
        </ProjectContainer>
      </>
    )}
  />
)

export default ProjectMafia
