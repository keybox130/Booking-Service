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
    this.state = {};
  }

  formatToCalendar() {
    const { calendar } = this.props;
    const { renderData } = calendar;
    let arr = renderData;
    let storage = [];
    for (let i = 0; i < arr.length; i++) {
      const month = arr[i];
      let days = month.days;
      let monthStorage = {};
      monthStorage.name = month.name;
      monthStorage.weeks = [];
      for (let j = 0; j < 35; j += 7) {
        monthStorage.weeks.push(days.slice(j, j+7));
      }
      storage.push(monthStorage);
    }
    this.setState({monthsWithWeeks: storage});
  }

  componentDidMount() {
    this.formatToCalendar();
  }

  render() {
    const { room, calendar } = this.props;
    let months = this.state.monthsWithWeeks ? <CalendarMonths room={room} calendar={calendar} format={this.state.monthsWithWeeks}/>
      : <h1>Loading...</h1>
    return (
      <Container>
        <CalendarDateSlider room={room} calendar={calendar}/>
        {months}
      </Container>
    );
  }
}

export default CalendarDates;