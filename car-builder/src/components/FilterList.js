import React from 'react';
import FilterLink from '../containers/FilterLink';

const FilterList = ({filter, values}) => (	
	<div className="filter-list">
		<strong>{filter}</strong>
		<ul>
			{values.map((value, key) => (
				<FilterLink key={key} filter={filter}>
					{value}
				</FilterLink>
			))}
		</ul>
	</div>
)

export default FilterList;