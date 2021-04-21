import React, { Component } from 'react';
import Title from './components/Title';
import Button from './components/Button';
import Spinbox from './components/Spinbox';
import './styles/App.css';

class App extends Component {
  timer;

  state = {
    value: 0,
    title: 'Spin Button',
    isPressed: false
  };

  doInterval(val) {
    if (this.state.isPressed) {
      this.setState({
        value: this.state.value + val
      });
      this.timer = setTimeout(() => {this.doInterval(val)}
      , 300);
    } else {
      clearTimeout(this.timer);
    }
  }

  handleMouseDown = (val) => {
    this.setState({
      isPressed: true
    }, () => {
      this.doInterval(val) // 화살표 함수 this 관련 서치 필요
    })
  }

  handleMouseUp = () => {
    this.setState({
      isPressed: false
    })
  }

  render() {
    const {value, title} = this.state;
    const {handleMouseDown, handleMouseUp} = this;
    return (
      <div style={{width: "50%", margin: "auto", fontSize: "30px"}}>
        <div className="box-wrapper">
          <Title title={title}/>
        </div>
        <div className="box-wrapper">
          <Spinbox value={value}/>
        </div>
        <div style={{display: "flex"}}>
          <div className="box-wrapper btn">
          <Button text="+" color="rgb(192, 57, 43)"
            handleMouseDown={handleMouseDown} handleMouseUp={handleMouseUp}/>
          </div>
          <div className="box-wrapper btn">
            <Button text="-" color="rgb(41, 128, 185)"
              handleMouseDown={handleMouseDown} handleMouseUp={handleMouseUp}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
