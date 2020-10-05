import React from 'react';
import styled from 'styled-components';
// Components
import Day from './Day.jsx';
import DaysOfWeek from './DaysOfWeek.jsx';

// Containers
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const MonthContainerLeft = styled.div`
  display: flex;
  align-items: left;
  justify-content: flex-start;
  flex-direction: column;
`;

const MonthContainerRight = styled.div`
  display: flex;
  align-items: right;
  justify-content: flex-end;
  flex-direction: column;
`;

const Week = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
`;

class AllMonths extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { months, dateHandlers, utc } = this.props;
    const month1 = months[0]
      ? <MonthContainerRight><DaysOfWeek />{months[0].map(week => <Week>{week.map(day => <Day type={day.type} value={day.value} dateHandlers={dateHandlers} utc={utc}/>)}</Week>)}</MonthContainerRight>
      : <h1>Loading...</h1>;
    const month2 = months[1]
      ? <MonthContainerLeft><DaysOfWeek />{months[1].map(week => <Week>{week.map(day => <Day type={day.type} value={day.value} dateHandlers={dateHandlers} utc={utc}/>)}</Week>)}</MonthContainerLeft>
      : <h1>Loading...</h1>;
    return (
      <Container>
        {month1}
        {month2}
      </Container>
    );
  }
}

export default AllMonths;