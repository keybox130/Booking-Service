import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-right: 86px;
  padding-left: 10px;
  padding-bottom: 10px;
`;

const SmallBoldTitle = styled.p`
  font-weight: 550;
  font-size: 11px;
`;

const DateText = styled.p`
  font-weight: 350;
  font-size: 15px;
  color: #707070;
`;

const CheckIn = ({ date }) => {
  return (
    <Container>
      <SmallBoldTitle>CHECK-IN</SmallBoldTitle>
      <DateText>{date}</DateText>
    </Container>
  )
}

export default CheckIn;