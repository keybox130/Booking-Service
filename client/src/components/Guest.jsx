import React from 'react';
import styled from 'styled-components';

// Containers
// const Container = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-between;
//   padding: 10px;
// `;

// const FlexCol = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: flex-start;
//   max-height: 50px;
//   margin: 0;
//   padding: 0;
// `;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;
const TitleDiv = styled.div`
  font-weight: bold;
  font-size: 12px;
`;

const SecondaryDiv = styled.div`
  font-weight: 400;
  font-size: 13px;
`;
const Arrow = styled.img`
  margin-right: 4px;
`;

// Font Styles

const SmallBoldTitle = styled.p`
  font-weight: bold;
  font-size: 12px;
`;

const SmallParaText = styled.p`
  font-weight: 400;
  font-size: 13px;
`;

class Guest extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleOpen() {
    const { open } = this.state;
    if (open) {
      this.setState({open: false});
    } else {
      this.setState({open: true});
    }
  }

  render() {
    const { guestCount, guestTotal, active, toggle } = this.props;
    const { open } = this.state;
    const guestCountRender = guestTotal
      ? <FlexCol> <TitleDiv>{'GUESTS'}</TitleDiv> <div>{guestTotal} {'guests'}</div></FlexCol>
      : <h1>Loading...</h1>;
    const arrowRender = active
      ? <Arrow src="https://keybox.s3-us-west-1.amazonaws.com/upArrow.png" />
      : <Arrow src="https://keybox.s3-us-west-1.amazonaws.com/downArrow.png" />;
    return (
      <Container onClick={() => { toggle(); this.handleOpen() }}>
        {guestCountRender}
        {arrowRender}
      </Container>
    );
  }
}

export default Guest;