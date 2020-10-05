import React from 'react';
import styled from 'styled-components';
// Components
import InitialStateHeader from './InitialStateHeader.jsx';
import InitialStateCheckInOut from './InitialStateCheckInOut.jsx';
import GuestModal from './GuestModal.jsx';
import Button from './Button.jsx';
import PriceDisplay from './PriceDisplay.jsx';

// Containers
const Container = styled.div`
  display: flex;
  flex-direction: column;
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
    const { room, checkIn, checkOut, guestTotal, guestModalActive, adultCount, childrenCount, infantCount, guestModalHandlers, guestModalToggle, dateRange, prices, handleCalendar } = this.props;
    const { max_guests } = room[0];
    console.log(room);
    const header = room
      ? <InitialStateHeader room={room[0]} />
      : <h1>Loading...</h1>;
    const checkInOut = checkIn
      ? <InitialStateCheckInOut room={room[0]} checkIn={checkIn} checkOut={checkOut} guestTotal={guestTotal} toggle={guestModalToggle} handleCalendar={handleCalendar} />
      : <h1>Loading...</h1>;
    const guestModalRender = guestModalActive
      ? <GuestModal active={guestModalActive} guestTotal={guestTotal} childrenCount={childrenCount} adultCount={adultCount} infantCount={infantCount} maxGuests={max_guests} handlers={guestModalHandlers} closeMe={guestModalToggle}/>
      : <div></div>;
    const buttonRender = dateRange !== undefined
      ? <Button active={dateRange} />
      : <button>Loading...</button>;
    const priceDisplayRender = dateRange
      ? <PriceDisplay prices={prices} />
      : <></>;
    return (
      <Container>
        {header}
        {checkInOut}
        {guestModalRender}
        {buttonRender}
        {priceDisplayRender}
      </Container>
    );
  }
}

export default InitialState;