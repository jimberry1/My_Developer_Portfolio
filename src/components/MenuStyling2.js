import React from "react"
import styled from "styled-components"

const MenuStyle = styled.div`
  background: #000080;
  padding-top: 10px;
  text-align: center;
  height: 80px;
  padding: 25px 0px;
  position: sticky;
  top: 0px;
`

const ListStyle = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  height: 100%;
`

const ListItem = styled.li`
  color: white;
  transition: 1s;
  position: relative;
  font-family: Bebas Neue;
  font-size: 25px;

  &::before {
    transition: 500ms;
    height: 2px;
    content: "";
    width: 0px;
    position: absolute;
    background-color: red;
    margin-top: 25px;
  }

  &:hover {
    color: red;
  }

  &:hover::before {
    width: 100%;
  }
`

const MenuStyling2 = ({ scrollTo }) => {
  return (
    <MenuStyle>
      <ListStyle>
        <ListItem onClick={() => scrollTo("Home", 1)}>Home</ListItem>
        <ListItem onClick={() => scrollTo("AboutMe", 2)}>About me</ListItem>
        <ListItem onClick={() => scrollTo("Projects", 3)}>Projects</ListItem>
        <ListItem onClick={() => scrollTo("Contact", 4)}>Contact</ListItem>
      </ListStyle>
    </MenuStyle>
  )
}

export default MenuStyling2
