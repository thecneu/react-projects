import React from 'react';
require('core-js/fn/object/values');

const Car = (props) => (
	<li>
		{Object.values(props).map((prop, index) => (
			<div key={index}>
				{prop}
			</div>
		))}
	</li>
);
	

export default Car;