import React from 'react';

const ActionButton = ({ active }) => {
  let activeButton = active === false ? <h3 className="btn-text">Check availability</h3> 
  : active === true ? <h3 className="btn-text">Reserve</h3> 
  : <h1>Loading...</h1>
  return (
    <div className="btn">
      {activeButton}
    </div>
  );
}

export default ActionButton;