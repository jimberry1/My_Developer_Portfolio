import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import BackgroundImage from "gatsby-background-image"
import "animate.css/animate.min.css"
import SeeMoreBox from "../components/SeeMoreBox"
import MenuStyling2 from "../components/MenuStyling2"
import Projects from "../components/projects"
import { motion, useAnimation } from "framer-motion"
import { Element, animateScroll as scroll, scroller } from "react-scroll"
import Profile from "../components/ProfileSection/Profile"
import Footer from "../components/footer"
import "../components/skillbar.css"
import {
  InnerContainerDiv,
  TitleStyle,
  TestingAbsolutePositionText,
  ArrowsContainer,
  StyledAngleThingy,
  StyledAngleThingy2,
} from "../components/generalStyling/homepageComponents"
import {
  seeMoreVariants,
  titleVariants,
} from "../components/generalStyling/animationVariants"
import TimelineContainer from "../components/timelineSection/timelineContainer"

const Index = ({ data }) => {
  const imageData = data.file.childImageSharp.fluid

  const scrollTo = (target, distance) => {
    console.log("scroll to invoked")
    scroller.scrollTo(target, {
      duration: 800 * distance,
      delay: 0,
      smooth: "easeInOutQuart", //smooth
    })
  }

  const controls = useAnimation()
  return (
    <div>
      <Element name="Home">
        <BackgroundImage
          fadeIn="true"
          durationFadeIn={3}
          onStartLoad={() => console.log("started")}
          onLoad={() => console.log("finished")}
          Tag="section"
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <InnerContainerDiv>
            <SEO title="Home" />
            <motion.div
              variants={titleVariants}
              initial="hidden"
              animate="visible"
            >
              <TitleStyle style={{ color: "pink" }}>Jim Berry</TitleStyle>
            </motion.div>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
            <motion.div
              onClick={() => scrollTo("NavBar")}
              variants={seeMoreVariants}
              initial="hidden"
              animate="visible"
            >
              <SeeMoreBox />
            </motion.div>
          </InnerContainerDiv>
        </BackgroundImage>
      </Element>
      <Element name="NavBar">
        <MenuStyling2 scrollTo={scrollTo} />
      </Element>
      <Element name="AboutMe">
        <Profile />
      </Element>

      <div>
        <Element name="Timeline">
          <TimelineContainer />
        </Element>
      </div>
      <div
        style={{
          position: "relative",
          width: "100%",
        }}
      >
        <div className="pageBreakComponentContainer">
          <motion.div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            variants={{
              hidden: {
                y: -130,
                opacity: 0,
              },
              visible: { y: 0, opacity: 1 },
            }}
            initial="hidden"
            animate={controls}
            onMouseOver={() => {
              controls.start("visible")
            }}
            onFocus={() => controls.start("visible")}
          >
            <TestingAbsolutePositionText>
              Want to check out any of my sites?
            </TestingAbsolutePositionText>
          </motion.div>
        </div>
      </div>

      <div
        style={{
          marginTop: "200px",
        }}
      >
        <Element name="Projects">
          <Projects />
        </Element>
      </div>
      <ArrowsContainer>
        <StyledAngleThingy></StyledAngleThingy>
        <StyledAngleThingy2></StyledAngleThingy2>
      </ArrowsContainer>
      <Footer />
    </div>
  )
}

export default Index

export const query = graphql`
  query MyQuery {
    file(
      childImageSharp: { gatsbyImageData: {} }
      relativePath: { eq: "JimGraduation.JPG" }
    ) {
      id
      childImageSharp {
        fluid(base64Width: 10) {
          aspectRatio
          sizes
          src
          srcSet
        }
      }
    }
  }
`
