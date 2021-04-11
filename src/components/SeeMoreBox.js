import React from "react"
import styled from "styled-components"
// import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const StyledArrowText = styled.h1`
  padding: 0px;
  margin: 0px;
  transition: transform 0.3s;

  @media (max-width: 1000px) {
    padding: 40px;
  }
`

const StyledSeeMore = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 25%;
  min-width: 35vw;
  min-height: 60px;
  height: 7vh;
  background-color: transparent;
  border: 3px solid white;
  color: white;
  font-family: "limelight";
  transition: 0.8s;

  &:hover {
    border: 8px solid #191970;
    background-color: #191970;
    border-radius: 25px;
    ${StyledArrowText} {
      transform: rotate(90deg);
    }
  }

  @media (max-width: 1000px) {
    width: 70%;
    padding: 40px;
  }
`

const StyledText = styled.h1`
  padding: 30px;
  margin: 0px;
  font-family: "limelight";

  @media (max-width: 1000px) {
    font-size: 20px;
  }
`

const SeeMoreBox = () => {
  return (
    <>
      <StyledSeeMore>
        <StyledText>See more</StyledText>
        <StyledArrowText>
          <FontAwesomeIcon icon={faArrowRight} />
        </StyledArrowText>
      </StyledSeeMore>
    </>
  )
}

export default SeeMoreBox
