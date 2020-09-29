import React from 'react';
import styled from 'styled-components';
import PriceReviews from './PriceReviews.jsx';

const Container = styled.div`
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  padding: 24px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
`;

class InitialState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let priceReviews = this.props.room ? <PriceReviews room={this.props.room[0]} />
      : <h1>Loading...</h1>;
    return (
      <Container>
        {priceReviews}
      </Container>
    );
  }
}

export default InitialState;
