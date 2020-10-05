import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: right;
  justify-content: flex-end;
`;

const CloseBtn = styled.div`
  color: white;
  font-weight: bold;
  background-color: #222222;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
`;

const ClearDate = styled.div`
  text-decoration: underline;
  font-size: 12px;
`;

class CalendarClose extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { handleCalendar, clearDates } = this.props;
    return (
      <Container>
        <ClearDate onClick={() => clearDates()}>Clear Dates</ClearDate>
        <CloseBtn onClick={() => handleCalendar()}>Close</CloseBtn>
      </Container>
    );
  }
}

export default CalendarClose;