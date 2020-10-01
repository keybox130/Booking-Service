import React from 'react';
import styled from 'styled-components';

const EmptyContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: center;
  width: 15px;
  height: 15px;
`;

const UsedContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: center;
  text-decoration: line-through;
  color: #CCCCCC;
  font-size: 14px;
  width: 15px;
  height: 15px;
`;

const NormalContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: center;
  font-size: 14px;
  border-radius: 100px;
  :hover {
    border: 0.5px solid #373737;
    cursor: pointer;
  }
  color: #373737;
  width: 15px;
  height: 15px;
`;

const ChainContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: center;
  font-size: 14px;
  border-radius: 8px;
  background-color: whitesmoke;
  :hover {
    border: 0.5px solid #373737;
    border-radius: 100px;
    background-color: white;
    cursor: pointer;
  }
  color: #373737;
  width: 15px;
  height: 15px;
`;

const SelectedContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: center;
  font-size: 14px;
  color: white;
  background-color: #222222;
  border-radius: 100px;
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { type, value } = this.props;
    let render = type === null ? <EmptyContainer><p></p></EmptyContainer>
      : type === 'used' ? <UsedContainer><p>{value}</p></UsedContainer>
      : type === 'normal' ? <NormalContainer><p>{value}</p></NormalContainer>
      : type === 'chain' ? <ChainContainer><p>{value}</p></ChainContainer>
      : type === 'selected' ? <SelectedContainer><p>{value}</p></SelectedContainer>
      : null;
    return(
      <div>
      <EmptyContainer><p></p></EmptyContainer>
      <UsedContainer><p>1</p></UsedContainer>
      <NormalContainer><p>1</p></NormalContainer>
      <ChainContainer><p>1</p></ChainContainer>
      <SelectedContainer><p>1</p></SelectedContainer>
      </div>
    );
  }
}

export default Day;