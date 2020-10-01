import React from 'react';
import styled from 'styled-components';

import CalendarTitle from './CalendarTitle.jsx';
import CalendarDates from './CalendarDates.jsx';

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
    z-index: 1 !important;
    min-height: 460px !important;
`;

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {startDate: 'MM/DD/YYYY', endDate: 'MM/DD/YYYY'};

    // Bindings
    this.updateStartDateOnInput = this.updateStartDateOnInput.bind(this);
    this.updateEndDateOnInput = this.updateEndDateOnInput.bind(this);
  }

  updateStartDateOnInput(e) {
    e.preventDefault();
    this.setState({startDate: e.target.value});
  }

  updateEndDateOnInput(e) {
    e.preventDefault();
    this.setState({endDate: e.target.value});
  }

  render() {
    const { room } = this.props;
    const functions = 
    {
      handleStartDate: this.updateStartDateOnInput,
      handleEndDate: this.updateEndDateOnInput,
    };
    let title = room ? <CalendarTitle room={room} calendar={this.state} functions={functions}/> : <h1>Loading...</h1>;
    let calendarDates = room ? <CalendarDates room={room} calendar={this.state} /> : <h1>Loading...</h1>;
    return (
      <Container>
        {title}
        {calendarDates}
      </Container>
    );
  }
}

export default Calendar;