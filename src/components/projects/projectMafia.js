import BackgroundImage from "gatsby-background-image"
import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
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
              {/* <Link to="/The-Bounce-Funktion"> */}
              <a
                href="https://mafia-app-4fcde.web.app/"
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

export default ProjectMafia
