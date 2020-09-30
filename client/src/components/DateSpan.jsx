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
  }

  render() {
    let days = this.state.months ? this.state.months[0].map(day => <Day date={day} />) : <h1>No Dates To Load</h1>;
    return(
      <Container>
        <MonthHolder>
        <FlexRow>
            <Day date={'Su'} type={'dow'}/>
            <Day date={'Mo'} type={'dow'}/>
            <Day date={'Tu'} type={'dow'}/>
            <Day date={'We'} type={'dow'}/>
            <Day date={'Th'} type={'dow'}/>
            <Day date={'Fr'} type={'dow'}/>
            <Day date={'Sa'} type={'dow'}/>
          </FlexRow>
          <FlexRow>
            <Day date={1}/>
            <Day date={2}/>
            <Day date={3}/>
            <Day date={4}/>
            <Day date={5}/>
            <Day date={6}/>
            <Day date={7}/>
          </FlexRow>
          <FlexRow>
            <Day date={8}/>
            <Day date={9}/>
            <Day date={10}/>
            <Day date={11}/>
            <Day date={12}/>
            <Day date={13}/>
            <Day date={14}/>
          </FlexRow>
          <FlexRow>
            <Day date={15}/>
            <Day date={16}/>
            <Day date={17}/>
            <Day date={18}/>
            <Day date={19}/>
            <Day date={20}/>
            <Day date={21}/>
          </FlexRow>
          <FlexRow>
            <Day date={22}/>
            <Day date={23}/>
            <Day date={24}/>
            <Day date={25}/>
            <Day date={26}/>
            <Day date={27}/>
            <Day date={28}/>
          </FlexRow>
          <FlexRow>
            <Day date={29}/>
            <Day date={30}/>
            <Day date={''}/>
            <Day date={''}/>
            <Day date={''}/>
            <Day date={''}/>
            <Day date={''}/>
          </FlexRow>
        </MonthHolder>
        <MonthHolder>
        <FlexRow>
            <Day date={'Su'} type={'dow'}/>
            <Day date={'Mo'} type={'dow'}/>
            <Day date={'Tu'} type={'dow'}/>
            <Day date={'We'} type={'dow'}/>
            <Day date={'Th'} type={'dow'}/>
            <Day date={'Fr'} type={'dow'}/>
            <Day date={'Sa'} type={'dow'}/>
          </FlexRow>
        <FlexRow>
            <Day date={''}/>
            <Day date={''}/>
            <Day date={1}/>
            <Day date={2}/>
            <Day date={3}/>
            <Day date={4}/>
            <Day date={5}/>
          </FlexRow>
          <FlexRow>
            <Day date={6}/>
            <Day date={7}/>
            <Day date={8}/>
            <Day date={9}/>
            <Day date={10}/>
            <Day date={11}/>
            <Day date={12}/>
          </FlexRow>
          <FlexRow>
            <Day date={13}/>
            <Day date={14}/>
            <Day date={15}/>
            <Day date={16}/>
            <Day date={17}/>
            <Day date={18}/>
            <Day date={19}/>
          </FlexRow>
          <FlexRow>
            <Day date={20}/>
            <Day date={21}/>
            <Day date={22}/>
            <Day date={23}/>
            <Day date={24}/>
            <Day date={25}/>
            <Day date={26}/>
          </FlexRow>
          <FlexRow>
            <Day date={27}/>
            <Day date={28}/>
            <Day date={29}/>
            <Day date={30}/>
            <Day date={31}/>
            <Day date={''}/>
            <Day date={''}/>
          </FlexRow>
        </MonthHolder>
      </Container>
    );
  }
}

export default DateSpan;