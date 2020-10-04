import React from 'react';
import styled from 'styled-components';
// Components
import CalendarTitle from './CalendarTitle.jsx';

// Container
const Container = styled.div`
  background: rgb(255, 255, 255) !important;
  border-radius: 16px !important;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 20px !important;
  display: inline-block !important;
  padding: 24px 32px 16px !important;
  position: absolute !important;
  top: 24px !important;
  right: 32px !important;
  width: 661px !important;
  z-index: 99 !important;
  min-height: 460px !important;
`;

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { room, checkIn, checkOut } = this.props;
    const { min_days } = room;
    const calTitle = min_days
      ? <CalendarTitle minDays={min_days} checkIn={checkIn} checkOut={checkOut} />
      : <h1>Loading...</h1>
    return (
      <Container>
        {calTitle}
      </Container>
    );
  }
}

export default Calendar;