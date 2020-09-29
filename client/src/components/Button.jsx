import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
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
`;

const Button = ({ active }) => {
  const text = active === true ? <h2>Reserve</h2> : <h2>Check availability</h2>;
  return (
    <StyledButton>
      {text}
    </StyledButton>
  );
}

export default Button;
