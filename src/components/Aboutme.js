import React from "react"
import styled from "styled-components"

const AboutMeStyles = styled.div`
  padding: 30px 50px;
  word-wrap: break-word;
  line-height: 35px;

  @media (max-width: 1000px) {
    padding: 20px 5px;
  }
`

const AboutMeSpan = styled.span`
  font-size: 35px;
  color: white;

  @media (max-width: 1000px) {
    font-size: 25px;
    text-align: center;
  }
`

const AboutMeContainer = styled.div`
  width: 50%;
  flex: 1;

  @media (max-width: 1000px) {
    width: 80%;
    font-size: 25px;
    text-align: center;
  }
`

const Aboutme = () => {
  return (
    <AboutMeContainer>
      <h1
        style={{
          backgroundImage: "linear-gradient(45deg, #f3ec78, #af4261)",
          WebkitTextFillColor: "transparent",
          textAlign: "center",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          fontWeight: "900",
          fontSize: "45px",
          padding: "20px",
          width: "100%",
        }}
      >
        About me
      </h1>
      <AboutMeStyles>
        <AboutMeSpan>
          My name is Jim and I'm a 24 year old software developer based in
          London. My work focuses on delivering object orientated software
          solutions in an agile way to clients around the world. In my free time
          I'm constantly trying to learn new skills; I taught myself web
          development in March last year and love the variety it brings to my
          coding experience.
        </AboutMeSpan>
      </AboutMeStyles>
    </AboutMeContainer>
  )
}

export default Aboutme
