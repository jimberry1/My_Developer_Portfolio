import styled from "styled-components"

export const TopSkillsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  flex-wrap: wrap;
`

export const InfoAndSkillsSection = styled.div`
  display: flex;
  padding: 20px;
  margin-bottom: 50px;
  margin-top: 50px;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`
