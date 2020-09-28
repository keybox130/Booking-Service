import React from 'react';
import GuestList from './GuestList.jsx';
import CheckInOut from './CheckInOut.jsx';

class CheckGuest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {checkIn: 'Select A Date', checkOut: 'Select A Date', guests: '1' };
  }

  render() {
    let guestList = this.props.room ? <GuestList room={this.props.room} /> : <h1>Loading...</h1>;
    let checkInOut = this.props.room ? <CheckInOut room={this.props.room} /> : <h1>Loading...</h1>;
    return (
      <div className="guests-outer">
        {checkInOut}
        {guestList}
      </div>
    );
  }
}

export default CheckGuest;
