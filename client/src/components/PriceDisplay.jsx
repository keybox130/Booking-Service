import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const UnderlinedText = styled.p`
  text-decoration: underline;
  color: #2e2e2e;
`;

const LightText = styled.p`
  color: #2e2e2e;
`;

const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border-top: 0.4px solid rgba(0, 0, 0, 0.12);
  font-size: 9px;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const DisclaimerText = styled.p`
  color: #2e2e2e;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px; 
  font-size: 14px;
`;


const PriceDisplay = ({ data, active }) => {
  if (active) {
    return (
      <Container>
      <DisclaimerText>You wont be charged yet</DisclaimerText>
      <FlexRow>
        <UnderlinedText>$116 x 1 night</UnderlinedText>
        <LightText>$116</LightText>
      </FlexRow>
      <FlexRow>
        <UnderlinedText>Service fee</UnderlinedText>
        <LightText>$43</LightText>
      </FlexRow>
      <TotalContainer>
        <h1>Total</h1>
        <h1>$159</h1>
      </TotalContainer>
    </Container>
  );
  }
  return null;
};

export default PriceDisplay;
