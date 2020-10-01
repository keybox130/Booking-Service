import React from 'react';
import styled from 'styled-components';
import Day from './Day.jsx';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const MonthHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenely;
  flex-direction: row;
  margin-top: 5px;
  margin-bottom: 5px;
`;

class DateSpan extends React.Component {
  constructor(props) {
    super(props);
    this.state = 
    {
      startingDate: '',
      endingDate: '',
      selectedDates: [],
      count: 0,
      months: null,
      baseDate: ''
    };

    this.hardCodedMonths = this.hardCodedMonths.bind(this);
  }


  hardCodedMonths() {
    var august = [
      {week: 'dow', data: [
        {date: 'Su', type: 'dow', key: 1},
        {date: 'Mo', type: 'dow', key: 2},
        {date: 'Tu', type: 'dow', key: 3},
        {date: 'We', type: 'dow', key: 4},
        {date: 'Th', type: 'dow', key: 5},
        {date: 'Fr', type: 'dow', key: 6},
        {date: 'Sa', type: 'dow', key: 7}
      ]},
      {week: 1, data: [
        {date: 1, type: 'normal', key: 1},
        {date: 2, type: 'normal', key: 2},
        {date: 3, type: 'normal', key: 3},
        {date: 4, type: 'normal', key: 4},
        {date: 5, type: 'normal', key: 5},
        {date: 6, type: 'normal', key: 6},
        {date: 7, type: 'normal', key: 7}
      ]},
      {week: 2, data: [
        {date: 8, type: 'normal', key: 1},
        {date: 9, type: 'normal', key: 2},
        {date: 10, type: 'normal', key: 3},
        {date: 11, type: 'normal', key: 4},
        {date: 12, type: 'normal', key: 5},
        {date: 13, type: 'normal', key: 6},
        {date: 14, type: 'normal', key: 7}
      ]},
      {week: 3, data: [
        {date: 15, type: 'normal', key: 1},
        {date: 16, type: 'normal', key: 2},
        {date: 17, type: 'normal', key: 3},
        {date: 18, type: 'normal', key: 4},
        {date: 19, type: 'normal', key: 5},
        {date: 20, type: 'normal', key: 6},
        {date: 21, type: 'normal', key: 7}
      ]},
      {week: 4, data: [
        {date: 22, type: 'normal', key: 1},
        {date: 23, type: 'normal', key: 2},
        {date: 24, type: 'normal', key: 3},
        {date: 25, type: 'normal', key: 4},
        {date: 26, type: 'normal', key: 5},
        {date: 27, type: 'normal', key: 6},
        {date: 28, type: 'normal', key: 7}
      ]},
      {week: 5, data: [
        {date: 29, type: 'normal', key: 1},
        {date: 30, type: 'normal', key: 2},
        {date: '', type: 'empty', key: 3},
        {date: '', type: 'empty', key: 4},
        {date: '', type: 'empty', key: 5},
        {date: '', type: 'empty', key: 6},
        {date: '', type: 'empty', key: 7}
      ]}
    ];

    const october = [
      {week: 'dow', data: [
        {date: 'Su', type: 'dow', key: 1},
        {date: 'Mo', type: 'dow', key: 2},
        {date: 'Tu', type: 'dow', key: 3},
        {date: 'We', type: 'dow', key: 4},
        {date: 'Th', type: 'dow', key: 5},
        {date: 'Fr', type: 'dow', key: 6},
        {date: 'Sa', type: 'dow', key: 7}
      ]},
      {week: 1, data: [
        {date: '', type: 'empty', key: 1},
        {date: '', type: 'empty', key: 2},
        {date: 1, type: 'normal', key: 3},
        {date: 2, type: 'normal', key: 4},
        {date: 3, type: 'normal', key: 5},
        {date: 4, type: 'normal', key: 6},
        {date: 5, type: 'normal', key: 7}
      ]},
      {week: 2, data: [
        {date: 6, type: 'normal', key: 1},
        {date: 7, type: 'normal', key: 2},
        {date: 8, type: 'normal', key: 3},
        {date: 9, type: 'normal', key: 4},
        {date: 10, type: 'normal', key: 5},
        {date: 11, type: 'normal', key: 6},
        {date: 12, type: 'normal', key: 7}
      ]},
      {week: 3, data: [
        {date: 13, type: 'normal', key: 1},
        {date: 14, type: 'normal', key: 2},
        {date: 15, type: 'normal', key: 3},
        {date: 16, type: 'normal', key: 4},
        {date: 17, type: 'normal', key: 5},
        {date: 18, type: 'normal', key: 6},
        {date: 19, type: 'normal', key: 7}
      ]},
      {week: 4, data: [
        {date: 20, type: 'normal', key: 1},
        {date: 21, type: 'normal', key: 2},
        {date: 22, type: 'normal', key: 3},
        {date: 23, type: 'normal', key: 4},
        {date: 24, type: 'normal', key: 5},
        {date: 25, type: 'normal', key: 6},
        {date: 26, type: 'normal', key: 7}
      ]},
      {week: 5, data: [
        {date: 27, type: 'normal', key: 1},
        {date: 28, type: 'normal', key: 2},
        {date: 29, type: 'normal', key: 3},
        {date: 30, type: 'normal', key: 4},
        {date: 31, type: 'normal', key: 5},
        {date: '', type: 'empty', key: 6},
        {date: '', type: 'empty', key: 7}
      ]},
    ];
    this.setState({august: august, october: october});
  }

  componentDidMount() {
    this.hardCodedMonths();
  }


  render() {
    let days = this.state.months ? this.state.months[0].map(day => <Day date={day} />) : <h1>No Dates To Load</h1>;
    let august = this.state.august ? (
      this.state.august.map(week => <FlexRow>{week.data.map(day => <Day date={day.date} type={day.type} keys={{week: week.week, key: day.key}}/>)}</FlexRow>)
    ) : <h1>Loading</h1>;
    let october = this.state.october ? (
      this.state.october.map(week => <FlexRow>{week.data.map(day => <Day date={day.date} type={day.type} keys={{week: week.week, key: day.key}} />)}</FlexRow>)
    ) : <h1>Loading</h1>;
    return(
      <Container>
        <MonthHolder>
          {august}
        </MonthHolder>
        <MonthHolder>
          {october}
        </MonthHolder>
      </Container>
    );
  }
}

export default DateSpan;