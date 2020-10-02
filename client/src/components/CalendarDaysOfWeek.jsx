import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  width: 260px;
`;

const DayOfWeek = styled.p`
  color: #777777;
  font-weight: 500;
  font-size: 14px;
`;

const CalendarDaysOfWeek = (props) => {
  return (
    <Container>
      <DayOfWeek>Su</DayOfWeek>
      <DayOfWeek>Mo</DayOfWeek>
      <DayOfWeek>Tu</DayOfWeek>
      <DayOfWeek>We</DayOfWeek>
      <DayOfWeek>Th</DayOfWeek>
      <DayOfWeek>Fr</DayOfWeek>
      <DayOfWeek>Sa</DayOfWeek>
    </Container>
  );
}

export default CalendarDaysOfWeek;