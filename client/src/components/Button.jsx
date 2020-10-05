import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 15px;
  border-radius: 8px;
  color: white;
  background: linear-gradient(-45deg, #FFA63D, #FF3D77);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  margin-top: 15px;
  margin-bottom: 15px;
  font-weight: bold;
`;

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { active } = this.props;
    const text = !active
      ? 'Check availability'
      : 'Reserve';
    return (
      <div>
        <Container>
          {text}
        </Container>
      </div>
    );
  }
}

export default Button;