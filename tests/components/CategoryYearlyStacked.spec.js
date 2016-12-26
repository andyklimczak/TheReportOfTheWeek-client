import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import CategoryYearlyStacked from '../../src/components/CategoryYearlyStacked.js';

describe('CategoryYearlyStacked', () => {
	const props = {
		data: [
			{
				"year": "2011",
				"Energy Crisis": 46,
				"Running On Empty": 1
			},
			{
				"year": "2012",
				"Energy Crisis": 29,
				"Running On Empty": 16
			},
			{
				"year": "2013",
				"Running On Empty": 30,
				"Energy Crisis": 16
			},
			{
				"year": "2014",
				"Running On Empty": 83,
				"Energy Crisis": 23
			},
			{
				"year": "2015",
				"Running On Empty": 84,
				"Energy Crisis": 24,
				"Review": 2,
				"Drink Review": 4
			},
			{
				"year": "2016",
				"Drink Review": 10,
				"Running On Empty": 105,
				"Energy Crisis": 13,
				"Review": 1,
				"Meal Review": 1
			}
		]
	};

	it('renders', () => {
		const div = document.createElement('div');
		ReactDOM.render(<CategoryYearlyStacked { ...props } />, div);
	});
});
