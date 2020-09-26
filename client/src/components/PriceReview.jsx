import React from 'react';

const PriceReview = (props) => {
    console.log(props.room);

    // let data;
    // if (props.room !== undefined) {
    //     data = <h1>{props.room.taxes}</h1>
    // } else {
    //     data = <h1>'Loading'</h1>
    // }
    let data = props.room !== undefined ? <h1>{props.room.taxes}</h1> : <h1>'Loading'</h1>
    return (
    <div>
        { props.room !== undefined ? <div><h1>{props.room.nightly_price}</h1>/Night<h1></h1></div>: <h1>'Loading...'</h1>}
        { props.room !== undefined ? <div><h1>{props.room.ratings_sum}</h1><h1>{props.room.ratings_count}</h1></div>: <h1>'Loading...'</h1>}
    </div>
    )  
}
//ratings_count
//ratings_sum
//nightly_price

export default PriceReview;