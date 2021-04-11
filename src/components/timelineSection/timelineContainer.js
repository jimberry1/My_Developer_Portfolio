import React from "react"
import timelineData from "./timelineData.json"
/**
 * The time line is going to load a series of events and render them one by one, each one coming into view when the person reaches that location on screen.
 *
 * The contianer is going to have a standard title at the top and then draw a white line down the side of it, which each timeline event will latch onto
 *
 * each event is going to be an object structured like so :
 * {
 * id: string;
 * eventDate: string;
 * eventLocation: string;
 * eventTitle: string;
 * eventBody: string;
 * eventWeight: number;
 * }
 */

import styled from "styled-components"

const StyledTimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #800080;
  padding-bottom: 200px;
`

const StyledTimelineEventsContainerSplitter = styled.div`
  //   height: 100%;
  //   width: 100%;
  //   display: inline-grid;
  //   grid-template-columns: 4fr, 4fr;

  height: 100%;
  width: 90%;
  margin-left: 10%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

const StyledTimelineEventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  flex: 1;
`

const StyledTimelineEventLine = styled.div`
  display: flex;
  align-items: flex-stretch;
  background: white;
  margin: 10px 0px;

  width: 30px;
  color: white;
  border-radius: 40px;
  justify-content: center;

  @media (max-width: 600px) {
    width: 15px;
  }
`

const StyledTimelineEvent = styled.div`
  display: flex;
  margin: 15px;
  font-size: 20px;
  color: white;
  background: black;
  height: 150px;
  width: 80%;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  position: relative;
`

const TimelineMarker = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  background: white;
  position: absolute;
  top: 75px;
  z-index: 100;
`

const TimelineContainer = () => {
  return (
    <StyledTimelineContainer>
      <h1
        style={{
          backgroundImage:
            "linear-gradient(to right top, #28bd45, #00b772, #00ae92, #00a4a3, #3b97a4)",
          WebkitTextFillColor: "transparent",
          textAlign: "center",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          fontWeight: "900",
          fontSize: "45px",
          marginTop: "50px",
        }}
      >
        Timeline
      </h1>
      <StyledTimelineEventsContainerSplitter>
        <StyledTimelineEventLine>'</StyledTimelineEventLine>
        <StyledTimelineEventsContainer>
          {timelineData.map(timelineEvent => {
            return (
              <StyledTimelineEvent key={timelineEvent.id}>
                {timelineEvent.eventTitle}
              </StyledTimelineEvent>
            )
          })}
        </StyledTimelineEventsContainer>
      </StyledTimelineEventsContainerSplitter>
    </StyledTimelineContainer>
  )
}

export default TimelineContainer
