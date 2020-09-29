import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 2px solid black;
  border-radius: 8px;
  padding: 10px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
`;

const SmallBoldTitle = styled.p`
  font-weight: 550;
  font-size: 11px;
`;

const GuestText = styled.p`
  font-weight: 350;
  font-size: 15px;
`;

const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SelectorDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Holder = styled.div`
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  padding: 24px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DivCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DivRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const OpenedGuests = ({ functions, guest, count, maxGuests }) => {
  let adultsButtons;
  if (guest < maxGuests) {
    if (count.adults === 1 && guest < maxGuests) {
      adultsButtons = (<DivRow>
      <img onClick={() => functions.removeAdult()} src="https://keybox.s3-us-west-1.amazonaws.com/inactiveMinus.png"/>
      <h3>{count.adults}</h3>
      <img onClick={() => functions.addAdult()} src="https://keybox.s3-us-west-1.amazonaws.com/activePlus.png"/>
    </DivRow>);
    } else if (count.adults >=2 && guest < maxGuests) {
      adultsButtons = (<DivRow>
        <img onClick={() => functions.removeAdult()} src="https://keybox.s3-us-west-1.amazonaws.com/activeMinus.png"/>
        <h3>{count.adults}</h3>
        <img onClick={() => functions.addAdult()} src="https://keybox.s3-us-west-1.amazonaws.com/activePlus.png"/>
      </DivRow>);
    }
  } else {
    adultsButtons = (<DivRow>
      <img onClick={() => functions.removeAdult()} src="https://keybox.s3-us-west-1.amazonaws.com/activeMinus.png"/>
      <h3>{count.adults}</h3>
      <img onClick={() => functions.addAdult()} src="https://keybox.s3-us-west-1.amazonaws.com/inactivePlus.png"/>
    </DivRow>);
  }

  return (
  <div>
  <Container onClick={() => functions.handleOpen()}>
    <InfoContainer>
      <SmallBoldTitle>GUESTS</SmallBoldTitle>
      <GuestText>{guest} guest</GuestText>
    </InfoContainer>
    <ArrowContainer>
      <img src="https://keybox.s3-us-west-1.amazonaws.com/upArrow.png" />
    </ArrowContainer>
  </Container>
  <Holder>
    <SelectorDiv>
      <DivCol>
        <h4>Adults</h4>
      </DivCol>
        {adultsButtons}
    </SelectorDiv>
    <SelectorDiv>
      <DivCol>
        <h4>Children</h4>
        <GuestText>Ages 2-12</GuestText>
      </DivCol>
      <DivRow>
        <img onClick={() => functions.removeChildren()} src="https://keybox.s3-us-west-1.amazonaws.com/inactiveMinus.png"/>
        <h3>{count.children}</h3>
        <img onClick={() => functions.addChildren()} src="https://keybox.s3-us-west-1.amazonaws.com/activePlus.png"/>
      </DivRow>
    </SelectorDiv>
    <SelectorDiv>
      <DivCol>
        <h4>Infants</h4>
        <GuestText>Under 2</GuestText>
      </DivCol>
      <DivRow>
        <img onClick={() => functions.removeInfants()} src="https://keybox.s3-us-west-1.amazonaws.com/inactiveMinus.png"/>
        <h3>{count.infants}</h3>
        <img onClick={() => functions.addInfants()} src="https://keybox.s3-us-west-1.amazonaws.com/activePlus.png"/>
      </DivRow>
    </SelectorDiv>
    <SelectorDiv>
      <GuestText>{maxGuests} guests maximun. Infants dont count toward the number of guests.</GuestText>
    </SelectorDiv>
  </Holder>
  </div>
  );
};
{/* <DivRow>
<img onClick={() => functions.removeAdult()} src="https://keybox.s3-us-west-1.amazonaws.com/inactiveMinus.png"/>
<h3>{count.adults}</h3>
<img onClick={() => functions.addAdult()} src="https://keybox.s3-us-west-1.amazonaws.com/activePlus.png"/>
</DivRow> */}
export default OpenedGuests;