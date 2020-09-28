import React from 'react';
import axios from 'axios';
import InitialState from './InitialState.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.getRoom = this.getRoom.bind(this);
  }

  getRoom() {
    const self = this;
    axios.get('http://localhost:3000/stays/2')
      .then((res) => {
        self.setState({ room: res.data });
      })
      .catch((err) => {
        console.log(`Err @ [ getRoom ] ::: ${err}`);
      });
  }

  componentDidMount() {
    this.getRoom();
  }

  render() {
    let render;
    if (this.state.room) {
      render = <InitialState room={this.state.room} />;
    } else {
      render = <h1>Loading...</h1>;
    }
    return (
      <div>
        <img src="https://keybox.s3-us-west-1.amazonaws.com/pepe.jpeg"/>
        {render}
      </div>
    );
  }
}

export default App;
