import BackgroundImage from "gatsby-background-image"
import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import {
  ProjectContainer,
  LearnMoreContainer,
  TitleContainer,
  BackgroundImageInnerContainer,
} from "./componentStyles"

//https://elated-fermat-1b2801.netlify.app/

const ProjectTicTacToe = props => (
  <StaticQuery
    query={graphql`
      query tictactoeImageQuery {
        file(
          childImageSharp: { gatsbyImageData: {} }
          relativePath: { eq: "Screenshot 2021-02-06 at 16.50.43.png" }
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
              <TitleContainer>TicTacToe</TitleContainer>
              {/* <Link to="/TicTacToe"> */}
              <a
                href="https://elated-fermat-1b2801.netlify.app"
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

export default ProjectTicTacToe
