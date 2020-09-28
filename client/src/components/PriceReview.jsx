import React from 'react';

const PriceReview = ({ room }) => (
  <div className="price-reviews-container">
    {room ? <div className="flex-row">
      <h3 className="spaced bold-title">${room.base_nightly_price}</h3>
      <h5 className="spaced secondary-text">/ night</h5>
    </div> : <h1>'Loading...'</h1>}
    {room ? <div className="flex-row">
      <img src="https://keybox.s3-us-west-1.amazonaws.com/star.png" />
      <h4 className="spaced bold-title">{room.ratings_sum}</h4>
      <h5 className="spaced secondary-text">({room.ratings_count})</h5>
    </div> : <h1>'Loading...'</h1>}
  </div>
);
export default PriceReview;

// setup is $XX(bold) /night(in grey lower font) + *(red)X.XX(bold) (XX)(in grey lower font)
// {room ? <h1>{room.base_nightly_price}</h1> : <h1>'Loading...'</h1> }
// {room ? <h1>{room.ratings_sum}</h1> : <h1>'Loading...'</h1> }
