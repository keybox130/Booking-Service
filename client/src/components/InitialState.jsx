import React from 'react';
import PriceReview from './PriceReview.jsx';
import CheckGuest from './CheckGuest.jsx';
import ActionButton from './ActionButton.jsx';

class InitialState extends React.Component {
  constructor(props) {
    super(props);
    this.state = { guests: false, calendar: false, datesSelected: false };
  }

  render() {
    let priceReview = this.props.room ? <PriceReview room={this.props.room[0]} /> : <h1>'Loading'...</h1>;
    let checkGuest = this.props.room ? <CheckGuest room={this.props.room[0]} /> : <h1>Loading...</h1>;
    let actionBtn = this.props.room ? <ActionButton active={this.state.datesSelected} /> : <h1>'Loading'...</h1>;
    return (
      <div className="outer-div">
        {priceReview}
        {checkGuest}
        {actionBtn}
      </div>
    );
  }
}

export default InitialState;
