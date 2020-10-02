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

    };
  }

 
  render() {
    const { format } = this.props; // Arr of 12 months each has name: STR and weeks: ARR. //Weeks: 5 arr of 7 obj each has type + value elems
    let october = format[9].weeks;
    let november = format[10].weeks;
    let octoberRender = october.map(week => <Week>{week.map(day => <Day type={day.type} value={day.value}/>)}</Week>);
    let novemberRender = november.map(week => <Week>{week.map(day => <Day type={day.type} value={day.value}/>)}</Week>);
    return (
      <Container>
        <Col>
          <CalendarDaysOfWeek />
          {octoberRender}
        </Col>
        <Col>
          <CalendarDaysOfWeek />
          {novemberRender}
        </Col>
      </Container>
    );
  }
}

export default CalendarMonths;