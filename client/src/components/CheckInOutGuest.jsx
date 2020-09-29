import React from 'react';
import styled from 'styled-components';
import Guests from './Guests.jsx';
import CheckIn from './CheckIn.jsx';
import CheckOut from './CheckOut.jsx';

const Container = styled.div`
  border-radius: 8px;
  border: 0.4px solid rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
`;

const FlexRow = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

class CheckInOutGuest extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checkIn: 'Add date', checkOut: 'Add date', guestCount: '1', adults: '1', children: '0', infants: '0'};
  }

  render() {
    const { guestCount, checkIn, checkOut } = this.state;
    const guestsRender = guestCount ? <Guests guest={guestCount} /> 
      : <h1>Loading...</h1>;
    const checkInRender = checkIn ? <CheckIn date={checkIn} /> 
      : <h1>Loading...</h1>;
    const checkOutRender = checkOut ? <CheckOut date={checkOut} />
      : <h1>Loading...</h1>;
    return (
      <Container>
        <FlexRow>
          {checkInRender}
          {checkOutRender}
        </FlexRow>
        {guestsRender}
      </Container>
    );
  }
}

export default CheckInOutGuest;
