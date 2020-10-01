import React from 'react';
import styled from 'styled-components';
import CalendarDaysOfWeek from './CalendarDaysOfWeek.jsx';
import Day from './Day.jsx';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;

const Week = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  width: 260px;
`;

// Initialize a base state with no type selectors(all empty / normal)
// Then run a function to go over it with the starting day in mind
// Then once the state contains a starting and ending date run a function that loops over the state and creates it again but with linked dates.

class CalendarMonths extends React.Component {
  constructor(props) {
    super(props);
    this.state = 
    {
      monthInfo: [
        {month: '01', name: 'January', days: 31},
        {month: '02', name: 'February', days: 28},
        {month: '03', name: 'March', days: 31},
        {month: '04', name: 'April', days: 30},
        {month: '05', name: 'May', days: 31},
        {month: '06', name: 'June', days: 30},
        {month: '07', name: 'July', days: 31},
        {month: '08', name: 'August', days: 31},
        {month: '09', name: 'September', days: 30},
        {month: '10', name: 'October', days: 31},
        {month: '11', name: 'November', days: 30},
        {month: '12', name: 'December', days: 31},
      ]
    };
  }

  initializeMonths() {
    const blankRender = [];
    for (let i = 0; i < 12; i++) {

    }
  }

  render() {
    return (
      <Container>
        <Col>
          <CalendarDaysOfWeek />
          <Day />
        </Col>
        <Col>
          <CalendarDaysOfWeek />
        </Col>
      </Container>
    );
  }
}

export default CalendarMonths;