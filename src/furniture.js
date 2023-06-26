import React from 'react';
import Elem from './elem';

const Furniture = () => {
	return (
		<div className="furniture">
			<h1>Мебель</h1>
			<div className="furniture-examples">
				<Elem type="CHAIR" />
				<Elem type="DIVAN" />
				<Elem type="DIVAN_3" />
				<Elem type="STOL_KRESLA" />
			</div>
		</div>
	)
}

export default Furniture;