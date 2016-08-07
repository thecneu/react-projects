import React from 'react';
import Car from './Car';

const List = ({cars}) => (
	<ul>
		{cars.map((car, i) => 
			<Car key={i} {...car} />
		)}
	</ul>
);

export default List;