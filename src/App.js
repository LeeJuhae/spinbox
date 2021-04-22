import React, { Component } from 'react';
import Title from './components/Title';
import Button from './components/Button';
import Spinbox from './components/Spinbox';
import './styles/App.css';

class App extends Component {
  timer;
  draggedItem = null;

  state = {
    value: 0,
    title: 'Spin Button',
    isPressed: false
  };

  doInterval(val) {
    if (this.state.isPressed && this.draggedItem === null) {
      this.setState({
        ...this.state,
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
      ...this.state,
      isPressed: true
    }, () => {
      this.doInterval(val)
    })
  }

  handleMouseUp = () => {
    this.setState({
      ...this.state,
      isPressed: false,
    })
  }

  handleDragStart = (e) => {
    this.draggedItem = e.target;
  }

  handleDrag = (e) => {
    this.setState({
      ...this.state,
      isPressed: false
    })
  }

  handleDrop = (e) => {
    if (e.target.parentNode.className.includes('box-wrapper'))
    {
      const draggedItem_parent = this.draggedItem.parentNode;
      const target_parent = e.target.parentNode;
      draggedItem_parent.appendChild(e.target);
      target_parent.appendChild(this.draggedItem);
      this.draggedItem = null;
    }
  }

  handleDragOver = (e) => {
    e.preventDefault();
  }

  render() {
    const {value, title} = this.state;
    const {handleMouseDown, handleMouseUp, handleDragStart, handleDrag} = this;
    return (
      <div style={{width: "50%", margin: "auto", fontSize: "27px"}}>
        <div className="box-wrapper" onDrop={this.handleDrop} onDragOver={this.handleDragOver}>
          <Title title={title} handleDragStart={handleDragStart} handleDrag={handleDrag}/>
        </div>
        <div className="box-wrapper" onDrop={this.handleDrop} onDragOver={this.handleDragOver}>
          <Spinbox value={value} handleDragStart={handleDragStart} handleDrag={handleDrag}/>
        </div>
        <div style={{display: "flex"}}>
          <div className="box-wrapper btn" onDrop={this.handleDrop} onDragOver={this.handleDragOver}>
          <Button text="+" color="rgb(192, 57, 43)"
            handleMouseDown={handleMouseDown} handleMouseUp={handleMouseUp} handleDrag={handleDrag}
            handleDragStart={handleDragStart}/>
          </div>
          <div className="box-wrapper btn" onDrop={this.handleDrop} onDragOver={this.handleDragOver}>
            <Button text="-" color="rgb(41, 128, 185)"
              handleMouseDown={handleMouseDown} handleMouseUp={handleMouseUp} handleDrag={handleDrag}
              handleDragStart={handleDragStart}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
