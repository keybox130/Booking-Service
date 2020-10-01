import React from 'react';
import styled from 'styled-components';

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
    return (
      <Container>
        <CalendarDateSlider />
      </Container>
    );
  }
}

export default CalendarDates;