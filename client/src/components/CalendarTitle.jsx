import React from 'react';
import styled from 'styled-components';

import CalendarTitleInOut from './CalendarTitleInOut.jsx';

const RowContainer = styled.div`
  display: flex;
  align-items: left;
  justify-content: flex-start;
  flex-direction: row;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  background-color: whitesmoke;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: flex-start;
`;

const TitleFont = styled.h2`
  color: #222222;
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 5px;
`;

const SubText = styled.p`
  color: #777777;
  font-weight: 400;
  font-size: 14px;
`;

class CalendarTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { room, calendar, functions } = this.props;
    let title = this.props.daysum ? <TitleFont>{this.props.daysum}</TitleFont> 
      : <TitleFont>Select dates</TitleFont>;
    let dateRange = this.props.dateRange ? <SubText>{this.props.dateRange}</SubText> 
      : this.props.room.min_days ? <SubText>Minimun stay: {this.props.room.min_days} nights</SubText>
      : <h1>Error</h1>;
    return (
      <Container>
        <Col>
          {title}
          {dateRange}
        </Col>
        <RowContainer>
          <CalendarTitleInOut room={room} functions={functions} calendar={calendar}/>
        </RowContainer>
      </Container>
    );
  }
}

export default CalendarTitle;