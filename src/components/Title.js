import React, { Component } from 'react';
import '../styles/Title.css';

class Title extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return (this.props.title !== nextProps.title);
	}
	render() {
		return (
			<div id="title" draggable={true}>{this.props.title}</div>
		);
	}
}

export default Title;
