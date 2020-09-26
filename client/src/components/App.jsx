import React from 'react';
import axios from 'axios';
import InitialState from './InitialState.jsx';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {allRoomData: []};

        this.getRoomData = this.getRoomData.bind(this);
    }

    getRoomData() {
        var self = this;
        axios.get('http://localhost:3000/stays/2')
            .then( res => {
                self.setState({allRoomData: res.data}); 
            })
            .catch( err => {
                console.log(`Err @ [ getRoomData ] ::: ${err}`);
            })
    }

    componentDidMount() {
        this.getRoomData();
    }

    render() {
        return (
            <div>
                <h1>Bookings</h1>
                <InitialState data={this.state.allRoomData} />
            </div>
        )
    }
}

export default App;