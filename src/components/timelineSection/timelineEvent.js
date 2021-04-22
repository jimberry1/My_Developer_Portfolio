import React from "react"
import styled from "styled-components"
import handleViewport from "react-in-viewport"

const StyledTimelineEventContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
  font-size: 20px;
  color: white;
  background: black;
  width: 80%;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  position: relative;
  padding: 0px 20px;
  box-shadow: 0 10px 10px -7px;
  min-height: 150px;

  @media (max-width: 600px) {
    padding: 0px 5px;
  }
`

const StyledTopContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid white;
  font-size: 1.2em;
  padding: 6px 20px;
`

const StyledBodyContainer = styled.div`
  margin: 5px;
  font-size: 0.8em;
`

const StyledDateContainer = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`

const TimelineEvent = ({ timelineEvent }) => {
  return (
    <StyledTimelineEventContainer>
      <StyledTopContainer>
        <div style={{ flex: 1 }}>{timelineEvent.eventTitle}</div>
        <StyledDateContainer>{timelineEvent.eventDate}</StyledDateContainer>
      </StyledTopContainer>
      <StyledBodyContainer>{timelineEvent.eventBody}</StyledBodyContainer>
    </StyledTimelineEventContainer>
  )
}

export default TimelineEvent
