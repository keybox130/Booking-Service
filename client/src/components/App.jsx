// Imports
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
// Components
import InitialState from './InitialState.jsx';
import Calendar from './Calendar.jsx';

const Container = styled.div`
  width: 100%;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = 
    {
      checkIn: 'Add date',
      checkOut: 'Add date',
      guestTotal: 1,
      adultCount: 1,
      childrenCount: 0,
      infantCount: 0,
      guestModalActive: false,
      dateRange: false,
    };

    // Bindings
    this.getRoom = this.getRoom.bind(this);
    this.changeTotalGuest = this.changeTotalGuest.bind(this);
    this.addAdult = this.addAdult.bind(this);
    this.removeAdult = this.removeAdult.bind(this);
    this.addChildren = this.addChildren.bind(this);
    this.removeChildren = this.removeChildren.bind(this);
    this.addInfants = this.addInfants.bind(this);
    this.removeInfants = this.removeInfants.bind(this);
    this.handleGuestModal = this.handleGuestModal.bind(this);
  }

  getRoom() {
    const self = this;
    axios.get('/stays/3')
      .then((res) => {
        self.setState({ roomData: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  changeTotalGuest() {
    const { adultCount, childrenCount, infantCount } = this.state;
    const total = adultCount + childrenCount + infantCount;
    this.setState({ guestTotal: total });
  }

  addAdult() {
    const self = this;
    const { adultCount, roomData, guestTotal } = this.state;
    const room = roomData[0];
    const { max_guests } = room;
    const max = parseInt(max_guests);
    const add = adultCount + 1;
    if (add <= max) {
      this.setState({ adultCount: add }, () => self.changeTotalGuest());
    }
  }

  removeAdult() {
    const self = this;
    const { adultCount, roomData, guestTotal } = this.state;
    const room = roomData[0];
    const { max_guests } = room;
    const max = parseInt(max_guests);
    const minus = adultCount - 1;
    if (minus > 0) {
      this.setState({adultCount: minus}, () => self.changeTotalGuest());
    }
  }

  addChildren() {
    const self = this;
    const { childrenCount, roomData, guestTotal } = this.state;
    const room = roomData[0];
    const { max_guests } = room;
    const max = parseInt(max_guests);
    const add = childrenCount + 1;
    if (add <= max) {
      this.setState({ childrenCount: add }, () => self.changeTotalGuest());
    }
  }

  removeChildren() {
    console.log('hi)')
    const self = this;
    const { childrenCount, roomData, guestTotal } = this.state;
    const room = roomData[0];
    const { max_guests } = room;
    const max = parseInt(max_guests);
    const minus = childrenCount - 1;
    if (minus >= 0) {
      this.setState({childrenCount: minus}, () => self.changeTotalGuest());
    }
  }

  addInfants() {
    const self = this;
    const { infantCount, roomData, guestTotal } = this.state;
    const room = roomData[0];
    const { max_guests } = room;
    const max = parseInt(max_guests);
    const add = infantCount + 1;
    if (add <= max) {
      this.setState({ infantCount: add }, () => self.changeTotalGuest());
    }
  }

  removeInfants() {
    const self = this;
    const { infantCount, roomData, guestTotal } = this.state;
    const room = roomData[0];
    const { max_guests } = room;
    const max = parseInt(max_guests);
    const minus = infantCount - 1;
    if (minus >= 0) {
      this.setState({infantCount: minus}, () => self.changeTotalGuest());
    }
  }

  handleGuestModal() {
    const { guestModalActive } = this.state;
    if (guestModalActive) {
      this.setState({guestModalActive: false});
    } else {
      this.setState({guestModalActive: true});
    }
  }

  componentDidMount() {
    this.getRoom();
  }

  render() {
    const guestModalHandlers = { addAdult: this.addAdult, removeAdult: this.removeAdult, addChildren: this.addChildren, removeChildren: this.removeChildren, addInfants: this.addInfants, removeInfants: this.removeInfants };
    const { roomData, checkIn, checkOut, guestTotal, guestModalActive, adultCount, childrenCount, infantCount, dateRange } = this.state;
    const base = roomData 
      ? <InitialState room={roomData} checkIn={checkIn} checkOut={checkOut} guestTotal={guestTotal} guestModalActive={guestModalActive} adultCount={adultCount} childrenCount={childrenCount} infantCount={infantCount} guestModalHandlers={guestModalHandlers} guestModalToggle={this.handleGuestModal} dateRange={dateRange}/>
      : <h1>Loading...</h1>;
    const calendarRender = roomData
      ? <Calendar room={roomData[0]} checkIn={checkIn} checkOut={checkOut} dateRange={dateRange} />
      : <h1>Loading...</h1>
    return (
      <Container>
        {base}
        {calendarRender}
      </Container>
    );
  }
}

export default App;
