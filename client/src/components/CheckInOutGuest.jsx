import React from 'react';
import styled from 'styled-components';
import Guests from './Guests.jsx';
import CheckIn from './CheckIn.jsx';
import CheckOut from './CheckOut.jsx';
import OpenedGuests from './OpenedGuests.jsx';

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
    this.state = { checkIn: 'Add date',
      checkOut: 'Add date',
      guestCount: 1,
      adults: 1,
      children: 0,
      infants: 0,
      model: false,
      maxGuests: this.props.room.max_guests
    };

    this.addAdult = this.addAdult.bind(this);
    this.removeAdult = this.removeAdult.bind(this);
    this.addChildren = this.addChildren.bind(this);
    this.removeChildren = this.removeChildren.bind(this);
    this.addInfants = this.addInfants.bind(this);
    this.removeInfants = this.removeInfants.bind(this);
  }

  openGuests() {
    this.setState({model: true});
  }

  closeGuests() {
    this.setState({model: false});
  }

  addAdult() {
    const num = this.state.adults + 1;
    this.setState({adults: num});
  }

  removeAdult() {
    const num = this.state.adults - 1;
    this.setState({adults: num});
  }

  addChildren() {
    const num = this.state.children + 1;
    this.setState({children: num});
  }

  removeChildren() {
    const num = this.state.children - 1;
    this.setState({children: num});
  }

  addInfants() {
    const num = this.state.infants + 1;
    this.setState({infants: num});
  }

  removeInfants() {
    const num = this.state.infants - 1;
    this.setState({infants: num});
  }

  render() {
    console.log(this.props.max_guests);
    const { guestCount, checkIn, checkOut } = this.state;
    const guestsRender = guestCount ? <OpenedGuests maxGuests={this.state.maxGuests} guest={guestCount} functions={{addAdult: this.addAdult, removeAdult: this.removeAdult, addChildren: this.addChildren, removeChildren: this.removeChildren, addInfants: this.addInfants, removeInfants: this.removeInfants}} count={this.state}/> 
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
