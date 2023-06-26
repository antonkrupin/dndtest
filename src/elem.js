/* eslint-disable default-case */
import React from 'react';
import { ItemTypes } from './constants';
import { useDrag } from 'react-dnd';

const Elem = (props) => {
	const { type } = props;
	let itemtype;
	let id;

	switch (type) {
		case 'CHAIR': {
			itemtype = 'CHAIR';
			id = 1;
			break;
		}
		case 'DIVAN': {
			itemtype = 'DIVAN';
			id = 2;
			break;
		}
		case 'DIVAN_3': {
			itemtype = 'DIVAN_3';
			id = 3;
			break;
		}
		case 'STOL_KRESLA': {
			itemtype = "STOL_KRESLA";
			id = 4;
			break;
		}
	}
	
	const [{isDragging}, drag] = useDrag(() => ({
		type: ItemTypes[itemtype],
		item: { id: id, name: itemtype },
		collect: monitor => ({
			isDragging: !!monitor.isDragging(),
		}),
	}))

	switch (type) {
		case 'CHAIR': {
			return (
				<div>
				<img
					ref={drag}
					style={{
						opacity: isDragging ? 0.1 : 1
					}}
					src="/img/kreslo.jpg"
					alt="кресло" />
					</div>
			)
		}
		case 'DIVAN': {
			return (
				<img
					ref={drag}
					style={{
						opacity: isDragging ? 0.1 : 1
					}}
					src="/img/divan.jpg"
					alt="диван"/>
			)
		}
		case 'DIVAN_3': {
			return (
				<img
					ref={drag}
					style={{
						opacity: isDragging ? 0.1 : 1
					}}
					src="/img/divan_3.jpg"
					alt="двиан"/>
			)
		}
		case 'STOL_KRESLA': {
			return (
				<img
					ref={drag}
					style={{
						opacity: isDragging ? 0.1 : 1
					}}
					src="/img/stol_kresla.jpg"
					alt="стол и кресла"/>
			)
		}
	}
}

export default Elem;