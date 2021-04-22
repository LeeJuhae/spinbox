import React, { Component } from 'react';
import '../styles/Title.css';

class Title extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return (this.props.title !== nextProps.title);
	}
	render() {
		const {title, handleDragStart, handleDrag} = this.props;
		return (
			<div id="title" draggable={true}
			onDragStart={handleDragStart}
			onDrag={handleDrag}>
				{title}
			</div>
		);
	}
}

export default Title;
