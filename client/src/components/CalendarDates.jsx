import React from 'react';
import styled from 'styled-components';
import CalendarMonths from './CalendarMonths.jsx';

import CalendarDateSlider from './CalendarDateSlider.jsx';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

class CalendarDates extends React.Component {
  constructor(props) {
    super(props);
    this.state={};
  }

  render() {
    const { room, calendar } = this.props;
    console.log('here')
    console.log(calendar);
    return (
      <Container>
        <CalendarDateSlider room={room} calendar={calendar}/>
        <CalendarMonths room={room} calendar={calendar}/>
      </Container>
    );
  }
}

export default CalendarDates;