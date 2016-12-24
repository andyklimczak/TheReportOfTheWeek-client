import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import CategoryCountBar from '../../src/components/CategoryCountBar.js';

describe('CategoryCountBar', () => {
  const props = {
    data: [
      {
        product: 'Product 1',
        manufacturer: 'Manufacturer 1',
        category: 'Category 1',
        videoTitle: 'Video title 1',
        dateReleased: new Date(),
        rating: 7.5
      },
      {
        product: 'Product 2',
        manufacturer: 'Manufacturer 2',
        category: 'Category 2',
        videoTitle: 'Video title 2',
        dateReleased: new Date(),
        rating: 7.5
      },
      {
        product: 'Product 3',
        manufacturer: 'Manufacturer 3',
        category: 'Category 3',
        videoTitle: 'Video title 3',
        dateReleased: new Date(),
        rating: 7.5
      }
    ]
  };

  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CategoryCountBar { ...props } />, div);
  });

  test('snapshots', () => {
    const component = renderer.create(<CategoryCountBar { ...props } />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('shows three bars', () => {
    const element = mount(<CategoryCountBar { ...props } />);
    expect(element.find('.recharts-bar-rectangle').length).toBe(3);
  });
});
