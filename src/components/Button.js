import React from 'react';
import '../styles/Button.css';

const Button = React.memo((props) => {
	const {text, color, handleMouseDown, handleMouseUp, handleDragStart, handleDrag} = props;
	return (
		<div className="btn" draggable={true}
			style={{backgroundColor: color, color: "white"}}
			onMouseDown={()=>handleMouseDown(parseInt(text+"1"))}
			onMouseUp={handleMouseUp}
			onDragStart={handleDragStart}
			onDrag={handleDrag}>
			{text}
		</div>
	)
});

export default Button;
