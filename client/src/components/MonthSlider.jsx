import React from 'react';
import styled from 'styled-components';
import Month from './Month.jsx';

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-top: 35px;
  margin-bottom: 15px;
`;

const FlexRowEven = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
`;

const MonthName = styled.h3`
  font-weight: 500;
  font-size: 16px;
`;

const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MiddleSpacer = styled.div`
  min-width: 50px;
`;


class MonthSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <FlexRow>
        <ArrowContainer><img src="https://keybox.s3-us-west-1.amazonaws.com/inactiveLeftArrow.png" /></ArrowContainer>
          <MonthName>August 2020</MonthName>
          <MiddleSpacer></MiddleSpacer>
          <MonthName>September 2020</MonthName>
         <ArrowContainer><img src="https://keybox.s3-us-west-1.amazonaws.com/activeRightArrow.png" /></ArrowContainer>
        </FlexRow>
        <Month />
      </div>
    );
  }
}

export default MonthSlider;