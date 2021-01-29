import BackgroundImage from "gatsby-background-image"
import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql, Link } from "gatsby"
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
      query projectImageQuery {
        file(
          childImageSharp: { gatsbyImageData: {} }
          relativePath: { eq: "TBFlogo1024.jpeg" }
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
              <TitleContainer>The Bounce Funktion</TitleContainer>
              <Link to="/The-Bounce-Funktion">
                <LearnMoreContainer>Learn more</LearnMoreContainer>
              </Link>
            </BackgroundImageInnerContainer>
          </BackgroundImage>
        </ProjectContainer>
      </>
    )}
  />
)

export default ProjectMafia
