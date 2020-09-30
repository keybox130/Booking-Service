import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MonthHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WeekHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  min-width: 300px;
`;

const DayOfWeekText = styled.p`
  color: #717171;
  font-weight: 500;
  font-size: 12px;
`;


class Months extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const daysOfWeek = (
    <WeekHolder>
      <DayOfWeekText>Su</DayOfWeekText>
      <DayOfWeekText>Mo</DayOfWeekText>
      <DayOfWeekText>Tu</DayOfWeekText>
      <DayOfWeekText>We</DayOfWeekText>
      <DayOfWeekText>Th</DayOfWeekText>
      <DayOfWeekText>Fr</DayOfWeekText>
      <DayOfWeekText>Sa</DayOfWeekText>
    </WeekHolder>
    );
    return (
      <Container>
        <MonthHolder>
          {daysOfWeek}
        </MonthHolder>
        <MonthHolder>
            {daysOfWeek}
        </MonthHolder>
      </Container>
    );
  }
}

export default Months;