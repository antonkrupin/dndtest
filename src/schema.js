import React, { useState } from 'react';
import { ItemTypes } from './constants';
import { useDrop } from 'react-dnd';
import Elem from './elem';

const Schema = () => {
	const [elems, setElems] = useState([]);
	const [{ isOver }, drop] = useDrop(() => ({
		accept: ItemTypes.CHAIR,
		drop: (item) => setElems([...elems, item]),
		collect: monitor => ({
			isOver: !!monitor.isOver(),
		}),
	}));
	return (
		<div ref={drop} className="schema">
			<h1>Схема расстановки</h1>
			{elems.map((elem, index) => <Elem type={elem.name} key={index}/>)}
			{isOver && (
				<div>
					<h1>drop here</h1>
				</div>
			)}
		</div>
	)
}

export default Schema;