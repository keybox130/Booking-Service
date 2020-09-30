import React from 'react';
import styled from 'styled-components';

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
  padding: 10px 60px 10px 10px;
`;

const CheckOutHolder = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 60px 10px 10px;
`;

const SelectedDateHolder = styled.div`
  border: 2px solid black;
  background-color: white;
  padding: 10px 60px 10px 10px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
`;

const Form = styled.input`
  
`;

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {nights: false, checkIn: 'Add date', checkOut: 'Add date'};
  }

  render() {
    const { nights } = this.state;
    const { room } = this.props;
    const { min_days } = room;
    return (
      <Container>
        <FlexRow>
          <FlexCol>
            {nights === false ? <BoldDays>Select dates</BoldDays> : <h1>{nights}</h1>}
            {min_days ? <SecondaryText>Minimun stay: {min_days} nights</SecondaryText> : <h1>Loading...</h1>}
          </FlexCol>
          <SelectedHolder>
            <SelectedDateHolder>
              <SmallBoldText>CHECK-IN</SmallBoldText>
              <SecondaryText>{this.state.checkIn}</SecondaryText>
            </SelectedDateHolder>
            <CheckOutHolder>
              <SmallBoldText>CHECKOUT</SmallBoldText>
              <SecondaryText>{this.state.checkOut}</SecondaryText>
            </CheckOutHolder>
          </SelectedHolder>
        </FlexRow>
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