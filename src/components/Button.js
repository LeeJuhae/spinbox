import React from 'react';
import '../styles/Button.css';

const Button = React.memo((props) => {
	return (
		<div className="btn" draggable={true}
			style={{backgroundColor: props.color, color: "white"}}
			onMouseDown={()=>props.handleMouseDown(parseInt(props.text+"1"))}
			onMouseUp={props.handleMouseUp}>{props.text}
		</div>
	)
});

export default Button;
