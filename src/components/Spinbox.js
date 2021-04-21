import React, { Component } from 'react';
import '../styles/Spinbox.css';

class Spinbox extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return (this.props.value !== nextProps.value);
	}
	render() {
		return (
			<div id="value">{this.props.value}</div>
		);
	}
}

export default Spinbox;
