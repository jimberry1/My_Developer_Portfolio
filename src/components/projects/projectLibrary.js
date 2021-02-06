import BackgroundImage from "gatsby-background-image"
import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import {
  ProjectContainer,
  LearnMoreContainer,
  TitleContainer,
  BackgroundImageInnerContainer,
} from "./componentStyles"

const ProjectLibrary = props => (
  <StaticQuery
    query={graphql`
      query projectLibraryQuery {
        file(
          childImageSharp: { gatsbyImageData: {} }
          relativePath: { eq: "Screenshot 2021-02-06 at 17.09.13.png" }
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
              <TitleContainer>Alfa Library</TitleContainer>
              {/* <Link to="/Alfa-Library"> */}
              <a
                href="https://github.com/Jamboree97/library"
                target="_blank"
                style={{
                  textDecoration: "none",
                  backgroundColor: "transparent",
                  color: "white",
                }}
              >
                <LearnMoreContainer>Learn more</LearnMoreContainer>
                {/* </Link> */}
              </a>
            </BackgroundImageInnerContainer>
          </BackgroundImage>
        </ProjectContainer>
      </>
    )}
  />
)

export default ProjectLibrary
