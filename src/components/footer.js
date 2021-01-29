import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"

const FooterContainer = styled.div`
  background: #001f3f;
  width: 100%;
  color: white;
  height: 200px;
`

const IconsContainer = styled.div`
  display: flex;
  margin: auto;
  padding-top: 80px;
  justify-content: space-around;
  width: 40%;
`
const IconContainer = styled.div`
  cursor: pointer;
  height: 80px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transition: 0.4s linear;
    opacity: 0.2;
  }

  &:hover {
    transform: scale(0.8);
  }

  &:hover::before {
    border-left: 3px solid;
    border-right: 3px solid;
    transform: skewX(20deg);
    opacity: 1;
  }
  &:hover::after {
    border-top: 3px solid;
    border-bottom: 3px solid;
    transform: skewY(-20deg);
    opacity: 1;
  }
`
const Footer = () => {
  return (
    <FooterContainer>
      <IconsContainer>
        <a
          href="https://github.com/jimberry1"
          target="_blank"
          style={{
            textDecoration: "none",
            backgroundColor: "transparent",
            color: "white",
          }}
        >
          <IconContainer>
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </IconContainer>
        </a>
        <a
          href="https://www.linkedin.com/in/jim-berry-b0509b14a/"
          target="_blank"
          style={{
            textDecoration: "none",
            backgroundColor: "transparent",
            color: "white",
          }}
        >
          <IconContainer>
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </IconContainer>
        </a>
        <a
          href="https://www.facebook.com/jim.berry.549"
          target="_blank"
          style={{
            textDecoration: "none",
            backgroundColor: "transparent",
            color: "white",
          }}
        >
          <IconContainer>
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </IconContainer>
        </a>
      </IconsContainer>
    </FooterContainer>
  )
}

export default Footer
