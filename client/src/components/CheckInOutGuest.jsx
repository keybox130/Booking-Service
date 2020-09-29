import React from 'react';
import styled from 'styled-components';
import Guests from './Guests.jsx';

const Container = styled.div`
  border-radius: 8px;
  border: 0.4px solid rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
`;

class CheckInOutGuest extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checkIn: 'Add date', checkOut: 'Add date', guestCount: '1', adults: '1', children: '0', infants: '0'};
  }

  render() {
    let guests = this.state.guestCount ? <Guests guest={this.state.guestCount} /> : <h1>Loading...</h1>
    return (
      <Container>
        {guests}
      </Container>
    );
  }
}

export default CheckInOutGuest;
