import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'enzyme';

import CategoryCountBar from '../../src/components/CategoryCountBar.js';

describe('CategoryCountBar', () => {
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
    ReactDOM.render(<CategoryCountBar { ...props } />, div);
  });

  it('shows three bars', () => {
    const element = render(<CategoryCountBar { ...props } />);
    expect(element.find('.recharts-bar-rectangle').length).toBe(3);
  });
});
