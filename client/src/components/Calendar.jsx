import React from 'react';
import styled from 'styled-components';
import MonthSlider from './MonthSlider.jsx';
import Day from './Day.jsx';
import DateSpan from './DateSpan.jsx';

const Container = styled.div`
  background: rgb(255, 255, 255) !important;
  border-radius: 16px !important;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 20px !important;
  display: inline-block !important;
  padding: 24px 32px 16px !important;
  position: absolute !important;
  top: 24px !important;
  right: 32px !important;
  width: 661px !important;
  z-index: 1 !important;
  min-height: 460px !important;
`;

const FlexLeftRow = styled.div`
  display: flex;
  margin-right: auto;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const SecondaryText = styled.p`
  color: #717171;
  font-weight: 500;
  font-size: 14px;
`;

const BoldDays = styled.p`
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 10px;
`;

const SelectedHolder = styled.div`
  border: 0.4px solid rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  background-color: whitesmoke;
`;

const SmallBoldText = styled.h4`
  font-weight: 600;
  font-size: 11px;
`;

const CheckInHolder = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px 10px 10px;
`;

const CheckOutHolder = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px 10px 10px;
`;

const SelectedDateHolder = styled.div`
  border: 2px solid black;
  background-color: white;
  padding: 10px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
`;

const Form = styled.input`
  color: #717171;
  font-weight: 500;
  font-size: 14px;
  border: transparent;
  margin: 0;
  padding: 0;
  background-color: transparent;
`;

const ClearDates = styled.p`
  text-decoration: underline;
  color: #222222;
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;
  cursor: pointer;
`;

const CloseButton = styled.div`
  border-radius: 8px;
  color: white;
  background-color:#222222;
  padding: 8px;
  min-width: 50px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
  margin-left: 10px;
  cursor: pointer;
`;

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = 
    {
      nights: false, 
      checkIn: 'Add date', 
      checkOut: 'Add date',
      checkInActive: false,
      checkOutActive: false,
    };

    this.handleCheckInForm = this.handleCheckInForm.bind(this);
    this.handleCheckOutForm = this.handleCheckOutForm.bind(this);
    this.selectCheckIn = this.selectCheckIn.bind(this);
    this.selectCheckOut = this.selectCheckOut.bind(this);
  }

  handleCheckInForm(e) {
    e.preventDefault();
    this.setState({checkIn: e.target.value});
  }

  handleCheckOutForm(e) {
    e.preventDefault();
    this.setState({checkOut: e.target.value})
  }

  selectCheckIn() {
    const { checkInActive, checkOutActive } = this.state;
    if (!checkInActive) {
      this.setState({checkInActive: true, checkOutActive: false});
    }
  }

  selectCheckOut() {
    const { checkInActive, checkOutActive } = this.state;
    if (!checkOutActive) {
      this.setState({checkInActive: false, checkOutActive: true});
    }
  }

  render() {
    const { nights, checkInActive, checkOutActive } = this.state;
    const { room } = this.props;
    const { min_days } = room;

    let checkIn = checkInActive === true ? (
    <SelectedDateHolder onClick={this.selectCheckIn}>
      <SmallBoldText>CHECK-IN</SmallBoldText>
      <Form onChange={this.handleCheckInForm} value={this.state.checkIn.length > 0 ? this.state.checkIn : `MM/DD/YYYY`}/>
    </SelectedDateHolder>)
      : (<CheckInHolder onClick={this.selectCheckIn}>
        <SmallBoldText>CHECK-IN</SmallBoldText>
        <Form onChange={this.handleCheckInForm} value={this.state.checkIn.length > 0 ? this.state.checkIn : `MM/DD/YYYY`}/>
      </CheckInHolder>);

    let checkOut = checkOutActive === true ? (
      <SelectedDateHolder onClick={this.selectCheckOut}>
        <SmallBoldText>CHECK-IN</SmallBoldText>
        <Form onChange={this.handleCheckOutForm} value={this.state.checkOut.length > 0 ? this.state.checkOut : `MM/DD/YYYY`}/>
      </SelectedDateHolder>)
        : (<CheckOutHolder onClick={this.selectCheckOut}>
          <SmallBoldText>CHECK-IN</SmallBoldText>
          <Form onChange={this.handleCheckOutForm} value={this.state.checkOut.length > 0 ? this.state.checkOut : `MM/DD/YYYY`}/>
        </CheckOutHolder>);
    return (
      <Container>
        <FlexRow>
          <FlexCol>
            {nights === false ? <BoldDays>Select dates</BoldDays> : <h1>{nights}</h1>}
            {min_days ? <SecondaryText>Minimum stay: {min_days} nights</SecondaryText> : <h1>Loading...</h1>}
          </FlexCol>
          <SelectedHolder>
            {checkIn}
            {checkOut}
          </SelectedHolder>
        </FlexRow>
        <MonthSlider />
        <DateSpan />
        <FlexLeftRow>
          <ClearDates>Clear dates</ClearDates>
          <CloseButton>Close</CloseButton>
        </FlexLeftRow>
      </Container>
    );
  }
}

// room_id: String,
//   ratings_count: String,
//   ratings_sum: String,
//   max_guests: String,
//   min_days: String,
//   service_fee: String,
//   base_nightly_price: String,
//   starting_date: Date,
//   weekly_discount: Object,
//   monthly_discount: Object,
//   already_booked: [],
//   taxes_fees: String,
//   additional_person_tax: String,

export default Calendar;