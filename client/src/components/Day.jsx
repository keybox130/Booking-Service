import React from 'react';
import styled from 'styled-components';

const NormalContainer = styled.div`
  padding: 10px;
  height: 15px;
  width: 15px;
  border-radius: 100px;
  :hover {
    border: 1px solid black;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
`;

const TakenContianer = styled.div`
  padding: 10px;
  height: 15px;
  width: 15px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
  color: #BBBBBB;
  text-decoration: line-through;
`;

const SelectedContainer = styled.div`
  padding: 10px;
  height: 15px;
  width: 15px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
  background-color: #222222;
  color: white;
`;

const ChainedContainer = styled.div`
  padding: 10px;
  height: 15px;
  width: 15px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
  background-color: #F6F6F6;
`;

class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {day: null, state: null}
  }

  handleClick() {

  }

  componentDidMount() {
    this.setState({day: this.props.day});
  }

  render() {
    return (
      <ChainedContainer>
        <p>1</p>
      </ChainedContainer>
    );
  }
}

export default Day;