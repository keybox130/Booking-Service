import React from 'react';
import styled from 'styled-components';

// Containers 
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 35px;
`;

const LeftArrow = styled.div`
  display: flex;
  align-items: left;
  justify-content: flex-start;
`;

const RightArrow = styled.div`
  display: flex;
  align-items: right;
  justify-content: flex-end;
`;

const LeftMonth = styled.div`
  display: flex;
  align-items: left;
  justify-content: flex-start;
  flex-direction: row;
  padding-right: 140px;
`;

const RightMonth = styled.div`
  display: flex;
  align-items: right;
  justify-content: flex-end;
  flex-direction: row;
  padding-left: 140px;
`;

// Fonts

const MonthTitle = styled.h3`
  font-weight: 500;
  font-size: 18px;
`;

class MonthSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <LeftArrow>
          <img src="https://keybox.s3-us-west-1.amazonaws.com/inactiveLeftArrow.png" />
        </LeftArrow>

        <LeftMonth>
          <MonthTitle>Month 2020</MonthTitle>
        </LeftMonth>

        <RightMonth>
          <MonthTitle>Month 2020</MonthTitle>
        </RightMonth>

        <RightArrow>
          <img src="https://keybox.s3-us-west-1.amazonaws.com/activeRightArrow.png" />
        </RightArrow>
      </Container>
    );
  }
}

export default MonthSlider;