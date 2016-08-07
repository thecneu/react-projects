import React from 'react';
import CarList from '../containers/CarList';

const Content = () => (
	<main>
		<header><h1>Cars</h1></header>
		<div className="content">
			<CarList />
		</div>
	</main>
)

export default Content