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
    this.state = {};
  }

  render() {
    return(
    <Container>
      <LeftArrow src="https://keybox.s3-us-west-1.amazonaws.com/inactiveLeftArrow.png" />
      <MonthTitleLeft>September 2020</MonthTitleLeft>
      <MonthTitleRight>October 2020</MonthTitleRight>
      <RightArrow src="https://keybox.s3-us-west-1.amazonaws.com/activeRightArrow.png"/>
    </Container>
    )
  }
}

export default CalendarDateSlider;