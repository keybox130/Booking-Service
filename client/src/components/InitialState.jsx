import React from 'react';
import PriceReview from './PriceReview.jsx';

class InitialState extends React.Component {
  constructor(props) {
    super(props);
    this.state = { guests: false, calendar: false };
  }

  render() {
    let priceReview = this.props.room ? <PriceReview room={this.props.room[0]} /> : <h1>'Loading'...</h1>;
    return (
      <div className="outer-div">
        {priceReview}
      </div>
    );
  }
}

export default InitialState;
