import BackgroundImage from "gatsby-background-image"
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import {
  ProjectContainer,
  LearnMoreContainer,
  TitleContainer,
  BackgroundImageInnerContainer,
} from "./componentStyles"

const ProjectPsych2 = props => (
  <StaticQuery
    query={graphql`
      query psychQuery {
        file(
          childImageSharp: { gatsbyImageData: {} }
          relativePath: { eq: "psych2.png" }
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
              <TitleContainer>Psych</TitleContainer>
              <a
                href="https://psych2.web.app/"
                target="_blank"
                style={{
                  textDecoration: "none",
                  backgroundColor: "transparent",
                  color: "white",
                }}
              >
                <LearnMoreContainer>Learn more</LearnMoreContainer>
              </a>
              {/* </Link> */}
            </BackgroundImageInnerContainer>
          </BackgroundImage>
        </ProjectContainer>
      </>
    )}
  />
)

export default ProjectPsych2
