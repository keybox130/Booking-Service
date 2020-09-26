import React from 'react';

const PriceReview = ({ room }) => (
  <div>
    {room ? <h1>{room.base_nightly_price}</h1> : <h1>'Loading...'</h1> }
    {room ? <h1>{room.ratings_sum}</h1> : <h1>'Loading...'</h1> }
  </div>
);

export default PriceReview;
