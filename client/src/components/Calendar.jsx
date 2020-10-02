/* eslint-disable */
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
    this.state = 
    {
      startDate: 'MM/DD/YYYY', 
      endDate: 'MM/DD/YYYY',
      monthInfo: [
        {month: '01', name: 'January', days: 31, year: '2021', emptyStart: 5, emptyEnd: 6 },
        {month: '02', name: 'February', days: 28, year: '2021', emptyStart: 1, emptyEnd: 6 },
        {month: '03', name: 'March', days: 31, year: '2021', emptyStart: 1, emptyEnd: 3},
        {month: '04', name: 'April', days: 30, year: '2021', emptyStart: 4, emptyEnd: 1},
        {month: '05', name: 'May', days: 31, year: '2021', emptyStart: 6, emptyEnd: 5},
        {month: '06', name: 'June', days: 30, year: '2021', emptyStart: 2, emptyEnd: 3},
        {month: '07', name: 'July', days: 31, year: '2021', emptyStart: 4, emptyEnd: 0},
        {month: '08', name: 'August', days: 31, year: '2021', emptyStart: 0, emptyEnd: 4},
        {month: '09', name: 'September', days: 30, year: '2021', emptyStart: 3, emptyEnd: 2},
        {month: '10', name: 'October', days: 31, year: '2020', emptyStart: 4, emptyEnd: 0},
        {month: '11', name: 'November', days: 30, year: '2020', emptyStart: 0, emptyEnd: 5},
        {month: '12', name: 'December', days: 31, year: '2020', emptyStart: 2, emptyEnd: 2},
      ],
    };

    // Bindings
    this.updateStartDateOnInput = this.updateStartDateOnInput.bind(this);
    this.updateEndDateOnInput = this.updateEndDateOnInput.bind(this);
    this.parseInitialDate = this.parseInitialDate.bind(this);
    this.initCalendar = this.initCalendar.bind(this);
  }

  initCalendar(monthOne = null, dayOne = null, monthTwo = null, dayTwo = null) {
    const { monthInfo, startingDate } = this.state;
    //Need to render out 1 day component for each month (starting in october 2020)
    //Can pass type props in, and date, but also need to be able to mutate it to update...
    //That means this function has to take in a target date and month to re-render.
    //Using monthOne and dayOne -> monthTwo, dayTwo we can re-run this function passing those as the selected dates.
    //We can just have the onClick change in the day, and only render it when there are two selected. (if else)

    //every month will have a 7 x 5 grid to maintain consistency in render(and to make it easy to splice out weeks);
    //Each one needs to be in its own month object (for slider purposes)
    

    if (monthOne === null) { //Just render all days as per normal
      let yearArr = [];
      for (let i = 0; i < monthInfo.length; i ++) {
        let month = {};
        month.name = monthInfo[i].name;
        month.year = monthInfo[i].year;
        month.days = [];
        let emptyStarting = monthInfo[i].emptyStart;
        let emptyEnding = monthInfo[i].emptyEnd;
        let amountOfDays = monthInfo[i].days;
        let dayValue = 1;
        for (let j = 0; j < 35; j++) {
          let day = {};
          if (emptyStarting > 0) {
            day.type = 'empty';
            day.value = '';
            month.days.push(day);
            emptyStarting--;
          } else if (amountOfDays > 0) {
            day.type = 'normal';
            day.value = dayValue;
            dayValue++;
            month.days.push(day);
            amountOfDays--;
          } else if (emptyEnding > 0) {
            day.type = 'empty';
            day.value = '';
            month.days.push(day);
            emptyEnding--;
          }
        }
        yearArr.push(month);
      }
      this.setState({renderData: yearArr});
    }
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
    this.initCalendar();
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