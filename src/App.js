import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'; 
import './App.css';
import Schema from './schema';
import Furniture from './furniture';

const App = () => {
	return (
		<>
			<DndProvider backend={HTML5Backend}>
				<h1>Схема компоновки мебели</h1>
				<Furniture />
				<Schema />
			</DndProvider>
		</>
	)
}

export default App;
