import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px; 
`;

const PriceRow = styled.div`
  display: flex;
  align-items: left;
  justify-content: space-between;
`;

const TotalRow = styled.div`
  display: flex;
  align-items: left;
  justify-content: space-between;
  border-top: 0.5px solid #222323;
`;

const PriceDesc = styled.h3`
  color: #222323;
  text-decoration: underline;
  font-weight: 400;
  font-size: 14px;
`;

const Price = styled.h3`
  font-size: inherit;
`;



class PriceDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state ={};
  }

  render() {
    const { prices } = this.props;
    return (
      <Container>
        <PriceRow><PriceDesc>Total Nightly Price</PriceDesc><Price>${prices.nightly}</Price></PriceRow>
        <PriceRow><PriceDesc>Service Fee</PriceDesc><Price>${prices.serviceFee}</Price></PriceRow>
        <PriceRow><PriceDesc>Guest Fee</PriceDesc><Price>${prices.additionalPerson}</Price></PriceRow>
        <PriceRow><PriceDesc>Taxes</PriceDesc><Price>${prices.taxes}</Price></PriceRow>
        <TotalRow><h3>Total</h3><Price>${prices.total}</Price></TotalRow>
      </Container>
    );
  }
}

export default PriceDisplay;