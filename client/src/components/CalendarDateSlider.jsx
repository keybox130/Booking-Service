import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 661px;
  margin-top: 40px;
  margin-bottom: 20px;
`;

const LeftArrow = styled.img`
  border: transparent;
`;

const RightArrow = styled.img`
  border: transparent;
`;

const MonthTitleLeft = styled.h3`
  font-weight: 500;
  font-size: 16px;
  padding-right: 110px;
`;

const MonthTitleRight = styled.h3`
  font-weight: 500;
  font-size: 16px;
  padding-left: 110px;
`;

class CalendarDateSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = 
    {
      leftMonth: null, 
      rightMonth: null, 
      nextMonth: null,
      allMonths: [
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
      ],
    };

    this.setInitialMonths = this.setInitialMonths.bind(this);
    this.traverseToNext = this.traverseToNext.bind(this);
    this.traverseToPrevious = this.traverseToPrevious.bind(this);
  }

  setInitialMonths() {
    console.log(this.props);
    const { calendar } = this.props;
    const { startingDate } = calendar;
    const { month, year } = startingDate;
    const { allMonths } = this.state;
    let left;
    let right;
    let next;
    for (let i = 0; i < allMonths.length; i++) {
      const monthStr = allMonths[i].month;
      if (month === monthStr) {
        left = allMonths[i].name;
        if (allMonths[i + 1]) {
          right = allMonths[i+ 1].name;
          if (allMonths[i + 2]) {
            next = allMonths[i + 2].name;
          } else {
            next = allMonths[0].name;
          }
        } else if (!allMonths[i + 1]){
          right = allMonths[0].name;
          next = allMonths[1].name;
        }
      }
    }
    left = left + ' ' + '2020';
    right = right + ' ' +  '2020';
    next = next + ' ' +  '2020';
    this.setState({leftMonth: left, rightMonth: right, nextMonth: next},
      () => console.log(this.state));
  }

  componentDidMount() {
    this.setInitialMonths();
  }

  traverseToNext() {
    const { leftMonth, rightMonth, nextMonth } = this.state;
    if (nextMonth !== null) {
      this.setState({previousMonth: leftMonth, leftMonth: rightMonth, rightMonth: nextMonth, nextMonth: null});
    }
  }

  traverseToPrevious() {
    const { previousMonth, leftMonth, rightMonth, nextMonth } = this.state;
    if (previousMonth) {
      this.setState({leftMonth: previousMonth, rightMonth: leftMonth, nextMonth: rightMonth});
    }
  }

  render() {
    let renderLeftMonth = this.state.leftMonth !== null ? <MonthTitleLeft>{this.state.leftMonth}</MonthTitleLeft>
      : <MonthTitleLeft>Loading...</MonthTitleLeft>;
    let renderRightMonth = this.state.rightMonth !== null ? <MonthTitleRight>{this.state.rightMonth}</MonthTitleRight>
      : <MonthTitleRight>Loading...</MonthTitleRight>;
    return(
    <Container>
      <LeftArrow onClick={this.traverseToPrevious} src="https://keybox.s3-us-west-1.amazonaws.com/inactiveLeftArrow.png" />
        {renderLeftMonth}
        {renderRightMonth}
      <RightArrow onClick={this.traverseToNext} src="https://keybox.s3-us-west-1.amazonaws.com/activeRightArrow.png"/>
    </Container>
    )
  }
}

export default CalendarDateSlider;