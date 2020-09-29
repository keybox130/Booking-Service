import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 0.4px solid rgba(0, 0, 0, 0.12);
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding: 10px;
`;

const SmallBoldTitle = styled.p`
  font-weight: 550;
  font-size: 11px;
`;

const GuestText = styled.p`
  font-weight: 350;
  font-size: 15px;
`;

const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const Guests = ({ functions, guest }) => (
  <Container>
    <InfoContainer>
      <SmallBoldTitle>GUESTS</SmallBoldTitle>
      <GuestText>{guest} guest</GuestText>
    </InfoContainer>
    <ArrowContainer>
      <img src="https://keybox.s3-us-west-1.amazonaws.com/downArrow.png" />
    </ArrowContainer>
  </Container>
);

export default Guests;