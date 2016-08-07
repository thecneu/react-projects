import React from 'react';

const ListLink = ({children, active, filterClick, filter}) => {
	if (active) {
		return (			
			<span onClick={() => filterClick('')/* reset filter */}>
				{children}
			</span>
		)
	}

	return (
		<li>
			<a href="#"
			  onClick={e => {
			  	e.preventDefault();
			  	filterClick(filter, children);
			  }}
			>
				{children}
			</a>
		</li>
	);
}

export default ListLink;