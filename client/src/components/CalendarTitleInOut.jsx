import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: left;
  justify-content: flex-start;
  flex-direction: row;
`;

const Col = styled.div`
  display: flex;
  align-items: left;
  justify-content: flex-start;
  flex-direction: column;
  padding: 10px;
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 11px;
  margin-bottom: 2px;
`;

const Form = styled.input`
  color: #777777;
  font-weight: 400;
  font-size: 14px;
  border: transparent;
  padding: 0;
  margin: 0;
  background-color: transparent;
`;

const SelectedForm = styled.div`
  display: flex;
  align-items: left;
  justify-content: flex-start;
  flex-direction: column;
  padding: 10px;
  border: 2px solid black;
  border-radius: 8px;
  background-color: white;
`;

class CalendarTitleInOut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {checkIn: false, checkOut: false};

    this.toggleHighlight = this.toggleHighlight.bind(this);
  }

  toggleHighlight() {
    if (this.state.checkIn === false) {
      this.setState({checkIn: true, checkOut: false});
    } else if (this.state.checkIn === true) {
      this.setState({checkIn: false, checkOut: true});
    }
  }

  render() {
    const { checkIn, checkOut } = this.state;
    let checkInForm = this.props.startDate ? <Form value={this.props.startDate} /> 
      : <Form value="Add date" />;
    let checkOutForm = this.props.endDate ? <Form value={this.props.endDate} />
      : <Form value="Add date" />
    let checkInFormRender = checkIn === true ? <SelectedForm><Title>CHECK-IN</Title>{checkInForm}</SelectedForm>
      : <Col onClick={this.toggleHighlight}><Title>CHECK-IN</Title>{checkOutForm}</Col>
    let checkOutFormRender = checkOut === true ? <SelectedForm><Title>CHECKOUT</Title>{checkOutForm}</SelectedForm>
      : <Col onClick={this.toggleHighlight}><Title>CHECKOUT</Title>{checkOutForm}</Col>
    return (
      <Container>
        {checkInFormRender}
        {checkOutFormRender}
      </Container>
    );
  }
}

export default CalendarTitleInOut;