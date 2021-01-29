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

const ProjectFloFitness = props => (
  <StaticQuery
    query={graphql`
      query projectFloFitnessImageQuery {
        file(
          childImageSharp: { gatsbyImageData: {} }
          relativePath: { eq: "floFitness.png" }
        ) {
          id
          childImageSharp {
            fluid(base64Width: 10, maxWidth: 500, maxHeight: 500) {
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
              <TitleContainer>Flo's Fitness</TitleContainer>
              <LearnMoreContainer>Learn more</LearnMoreContainer>
            </BackgroundImageInnerContainer>
          </BackgroundImage>
        </ProjectContainer>
      </>
    )}
  />
)

export default ProjectFloFitness
