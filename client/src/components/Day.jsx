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
  cursor: pointer;
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

const DayOfWeekContainer = styled.div`
  padding: 10px;
  height: 15px;
  width: 15px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
  color: #727272;
`;

const Empty = styled.div`
  padding: 10px;
  height: 15px;
  width: 15px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
  color: #727272; 
`;

class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {day: null, type: ''}
  }

  sendClickDate() {
    const { day } = this.state;
  }
  componentDidMount() {
    this.setState({day: this.props.date, type: this.props.type});
  }

  render() {
    let button = this.state.type === 'normal' ? (<NormalContainer onClick={this.handleClick}><p>{this.state.day}</p></NormalContainer>)
      : this.state.type === 'dow' ? (<DayOfWeekContainer ><p>{this.state.day}</p></DayOfWeekContainer>)
      : this.state.type === 'selected' ? (<SelectedContainer onClick={this.handleClick}><p>{this.state.day}</p></SelectedContainer>)
      : this.state.type === 'chained' ? (<ChainedContainer onClick={this.handleClick}><p>{this.state.day}</p></ChainedContainer>)
      : this.state.type === 'used' ? (<TakenContianer onClick={this.handleClick}><p>{this.state.day}</p></TakenContianer>)
      : this.state.type === 'empty' ? <Empty><p></p></Empty> : <h1>ERROR</h1>
    return (
    <div>
      {button}
    </div>
    );
  }
}

export default Day;