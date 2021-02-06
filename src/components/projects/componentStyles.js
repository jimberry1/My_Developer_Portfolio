import React from "react"
import styled from "styled-components"

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  margin: auto;
  justify-content: center;
  flex-wrap: wrap;
  padding: 25px;
`
export const PaddingWrapper = styled.div`
  padding: 10px;
`

export const TitleStyle = styled.h1`
  color: #000080;
  font-family: Montserrat;
  font-weight: 900;
  //   font-family: "Rock Salt", cursive;
  font-size: 4em;
  width: 100%;
  text-align: center;
  padding: 20px;
  margin-top: 50px;
`

export const ProjectContainer = styled.div`
  height: 400px;
  width: 400px;
  border: 2px solid black;
  background: navyblue;
  transition: 0.6s;
  &:hover {
    transform: scale(1.05);
    box-shadow: gray 8px 8px 8px 8px;
  }
`
export const LearnMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50px;
  text-align: center;
  position: absolute;
  bottom: 0px;
  margin-left: 25%;
  margin-right: 25%;
  opacity: 0;
  transition: 1s;
  background: #dc143c;
  color: white;
  border-radius: 25px;
  font-family: "Bangers", cursive;
  font-weight: bold;
  font-size: 1.2em;

  &:hover {
    transform: scale(1.25);
    cursor: pointer;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  text-align: center;
  position: absolute;
  top: 0px;
  opacity: 0;
  transition: 1s;
  font-family: Bebas Neue;
  font-size: 2.5em;
  word-wrap: break-word;
`

export const BackgroundImageInnerContainer = styled.div`
  opacity: 0;
  transition: 1s;
  background: white;
  height: 100%;
  width: 100%;
  position: relative;

  &:hover {
    opacity: 0.95;
    ${LearnMoreContainer} {
      opacity: 1;
      bottom: 100px;
      margin-left: 0 auto;
      margin-right: 0 auto;
    }
    ${TitleContainer} {
      opacity: 1;
      top: 100px;
      margin-left: 0 auto;
      margin-right: 0 auto;
    }
  }
`
