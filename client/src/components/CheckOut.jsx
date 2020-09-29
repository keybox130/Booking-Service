import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 140px 10px 10px;
  border-left: 0.4px solid rgba(0, 0, 0, 0.12);
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

const CheckOut = ({ date }) => (
  <Container>
    <SmallBoldTitle>CHECKOUT</SmallBoldTitle>
    <DateText>{date}</DateText>
  </Container>
);

export default CheckOut;