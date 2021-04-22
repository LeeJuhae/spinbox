import React, { Component } from 'react';
import '../styles/Spinbox.css';

class Spinbox extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return (this.props.value !== nextProps.value);
	}
	render() {
		const {value, handleDragStart, handleDrag} = this.props;
		return (
			<div id="value" draggable={true}
			onDragStart={handleDragStart}
			onDrag={handleDrag}>
				{value}
			</div>
		);
	}
}

export default Spinbox;
