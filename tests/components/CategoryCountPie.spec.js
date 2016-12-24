import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'enzyme';

import CategoryCountPie from '../../src/components/CategoryCountPie.js';

describe('CategoryCountPie', () => {
  const props = {
    data: [
      {
        category: 'Category 1',
        count: '1'
      },
      {
        category: 'Category 2',
        count: '2'
      },
      {
        category: 'Category 3',
        count: '3'
      }
    ]
  };

  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CategoryCountPie { ...props } />, div);
  });

  it('shows three sectors', () => {
    const element = render(<CategoryCountPie { ...props } />);
    expect(element.find('.recharts-pie-sector').length).toBe(3);
  });
});
