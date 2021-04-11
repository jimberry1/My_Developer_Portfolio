import BackgroundImage from "gatsby-background-image"
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import {
  ProjectContainer,
  LearnMoreContainer,
  TitleContainer,
  BackgroundImageInnerContainer,
} from "./componentStyles"

const ProjectPtPlanner = props => (
  <StaticQuery
    query={graphql`
      query ptPlannerQuery {
        file(
          childImageSharp: { gatsbyImageData: {} }
          relativePath: { eq: "PtPlanner.png" }
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
              <TitleContainer>PT Planning app</TitleContainer>
              <a
                href="https://flo-fitness.web.app/"
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

export default ProjectPtPlanner
