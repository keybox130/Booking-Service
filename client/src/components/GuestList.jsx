import React from 'react';

class GuestList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {totalGuests: '1'};
  }

  render() {
    return (
      <div className="guests-box">
          <div className="guests-info">
            <p className="bold-title">GUESTS</p>
            <h4 className="secondary-text">{this.state.totalGuests} guest</h4>
          </div>
          <div className="guests-arrow">
            <img src="https://keybox.s3-us-west-1.amazonaws.com/downArrow.png"/>
          </div>
        </div>
    );
  }
}

export default GuestList;
