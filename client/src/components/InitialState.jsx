import React from 'react';
import styled from 'styled-components';
import PriceReviews from './PriceReviews.jsx';
import CheckInOutGuest from './CheckInOutGuest.jsx';
import Button from './Button.jsx';
import PriceDisplay from './PriceDisplay.jsx';

const Container = styled.div`
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  padding: 24px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
`;

class InitialState extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dateSelected: false };
  }

  render() {
    const priceReviews = this.props.room ? <PriceReviews room={this.props.room[0]} />
      : <h1>Loading...</h1>;
    const checkInOutGuest = this.props.room ? <CheckInOutGuest room={this.props.room[0]} />
      : <h1>Loading...</h1>;
    const button = this.state.dateSelected !== undefined ? <Button active={this.state.dateSelected} />
      : <h1>Loading...</h1>;
    const priceDisplay = this.state.dateSelected !== undefined ? <PriceDisplay active={this.state.dateSelected} />
      : <h1>Loading...</h1>
    return (
      <Container>
        {priceReviews}
        {checkInOutGuest}
        {button}
        {priceDisplay}
      </Container>
    );
  }
}

export default InitialState;
