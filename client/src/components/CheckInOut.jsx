import React from 'react';

class CheckInOut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {checkIn: 'Add date', checkOut: 'Add date'};
  }

  render() {
    return (
      <div className="date-container">
        <div className="check-in-container">
          <h3 className="bold-title">CHECK-IN</h3>
          <p className="secondary-text">{this.state.checkIn}</p>
        </div>

        <div className="check-out-container">
          <h3 className="bold-title">CHECKOUT</h3>
          <p className="secondary-text">{this.state.checkOut}</p>
        </div>
      </div>
    );
  }
}

export default CheckInOut;