import React from 'react';
import FilterList from './FilterList';

const Sidebar = ({cars, filterables}) => {
	return (
		<aside>
			<h1>Filter By:</h1>
			{filterables.map((filterable, index) => (
				<FilterList key={index} {...filterable} />
			))}
		</aside>		
	)
}

export default Sidebar