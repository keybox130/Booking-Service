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
    this.parseInitialDate = this.parseInitialDate.bind(this);
  }

  updateStartDateOnInput(e) {
    e.preventDefault();
    this.setState({startDate: e.target.value});
  }

  updateEndDateOnInput(e) {
    e.preventDefault();
    this.setState({endDate: e.target.value});
  }

  parseInitialDate() {
    const { room } = this.props;
    const { starting_date } = room;
    const roomDate = starting_date;
    const format = roomDate.split('').splice(0, 10).join('');
    const year = format.split('-').slice(0,1).join('');
    const month = format.split('-').slice(1,2).join('');
    const day = format.split('-').slice(2,3).join('');
    const date = {month, day, year};
    this.setState({startingDate: date});
  }

  componentDidMount() {
    this.parseInitialDate();
  }

  render() {
    const { room } = this.props;
    const functions = 
    {
      handleStartDate: this.updateStartDateOnInput,
      handleEndDate: this.updateEndDateOnInput,
    };
    let title = room ? <CalendarTitle room={room} calendar={this.state} functions={functions}/> : <h1>Loading...</h1>;
    let calendarDates = this.state.startingDate ? <CalendarDates room={room} calendar={this.state} /> : <h1>Loading...</h1>;
    return (
      <Container>
        {title}
        {calendarDates}
      </Container>
    );
  }
}

export default Calendar;