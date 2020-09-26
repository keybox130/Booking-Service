import React from 'react';
import PriceReview from './PriceReview.jsx';

class InitialState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {opened: false};
    }

    render() {
        console.log(this.props.data);
        const data = this.props.data[0];
        return (
            <div>
               <PriceReview room={data} />
            </div>
        )
    }
}

export default InitialState;