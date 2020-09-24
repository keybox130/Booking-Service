import React from 'react';
import axios from 'axios';

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
        console.log(this.state.allRoomData);
        return (
            <div>
                <h1>Hello World</h1>
            </div>
        )
    }
}

export default App;