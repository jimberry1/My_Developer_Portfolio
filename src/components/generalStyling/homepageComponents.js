import React from "react"
import { keyframes } from "styled-components"
import styled from "styled-components"

export const InnerContainerDiv = styled.div`
  color: black;
  // display: flex;
  position: relative;
  margin-left: 50px;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  padding-top: 100px;
  height: 100vh;
  @media (max-width: 600px) {
    margin-left: 10px;
    padding-top: 30px;
  }
`

export const TitleStyle = styled.h1`
  margin-top: 100px;
  font-size: 125px;
  color: white;

  @media (max-width: 600px) {
    font-size: 100px;
  }
`

export const TestingAbsolutePosition = styled.div`
  position: absolute;
  background-color: white;
  height: 300px;
  width: 50vw;
  top: 255vh;
  // bottom: 100vh;
  left: 25vw;
  box-shadow: 8px 8px 8px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: green;
  text-align: center;
`

export const TestingAbsolutePositionText = styled.span`
  text-align: center;
  font-size: 35px;
  color: white;
`

export const ProjectSection = styled.div`
  height: 100vh;
  background-color: limegreen;
`

export const StylingTestDiv = styled.div`
  height: ${props => (props.selected ? "200px" : "0px")};
  width: 50px;
  transition: 1s;
  background-image: linear-gradient(limegreen, red);
`

export const ContainerContainer = styled.div`
  position: relative;
`
export const Container = styled.div`
  background: black;

  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 1000px;

  span {
    text-transform: uppercase;
    display: block;
  }
`
// const text = keyframes`
// 0% {
// color: black;
// margin-bottom: -40px;
// } 30% {
//   letter-spacing: 25px;
//   margin-bottom: -40px;
// }
// 85% {
//   letter-spacing: 8px;
//   margin-bottom: -40px;
// }`

// export const Text1 = styled.span`
//   font-size: 60px;
//   font-weight: 700;
//   letter-spacing: 8px;
//   margin-bottom: 20px;
//   color: white;
//   background: black;
//   position: relative;
//   animation: ${text} 3s infinite;
// `

export const Text2 = styled.span`
  font-size: 30px;
  color: #6ab04c;
`

export const ArrowsContainer = styled.div`
height: 400px;
width: 100%;
position: relative;
background-color: black;
padding-top: 300px
color: white;
z-index: 1;
margin-top: 300px
`

export const StyledAngleThingy = styled.div`
  position: absolute;
  width: 100%;
  top: -5%;
  height: 30vh;
  transform: rotate(-15deg) translateX(49.9%);
  background-color: black;
`
export const StyledAngleThingy2 = styled.div`
  position: absolute;
  width: 100%;
  height: 30vh;
  top: -5%;
  transform: rotate(15deg) translateX(-49.9%);
  background-color: black;
`
