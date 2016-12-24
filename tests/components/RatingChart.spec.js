import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import RatingChart from '../../src/components/RatingChart.js';

describe('RatingChart', () => {
  const props = {
    data: [
      {
        category: 'Category 1',
        product: 'Product 1',
        manufacturer: 'Manufacturer 1',
        rating: 1,
        dateReleased: new Date(2011, 0, 1),
        dateReleasedUnix: new Date(2011, 0, 1).getTime(),
        videoCode: '111',
        videoTitle: 'Video 1'
      },
      {
        category: 'Category 2',
        product: 'Product 2',
        manufacturer: 'Manufacturer 2',
        rating: 2,
        dateReleased: new Date(2012, 0, 1),
        dateReleasedUnix: new Date(2012, 0, 1).getTime(),
        videoCode: '222',
        videoTitle: 'Video 2'
      },
      {
        category: 'Category 3',
        product: 'Product 3',
        manufacturer: 'Manufacturer 3',
        rating: 3,
        dateReleased: new Date(2013, 0, 1),
        dateReleasedUnix: new Date(2013, 0, 1).getTime(),
        videoCode: '333',
        videoTitle: 'Video 3'
      },
      {
        category: 'Category 4',
        product: 'Product 4',
        manufacturer: 'Manufacturer 4',
        rating: 4,
        dateReleased: new Date(2014, 0, 1),
        dateReleasedUnix: new Date(2014, 0, 1).getTime(),
        videoCode: '444',
        videoTitle: 'Video 4'
      }
    ]
  };

  pit('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RatingChart { ...props } />, div);
  });

  describe('mount component', () => {
    const element = mount(<RatingChart { ...props } />);

    it('shows four points', () => {
      expect(element.find('.recharts-scatter-symbol').length).toBe(4);
    });

    it('shows reference line', () => {
      expect(element.find('.recharts-reference-line').length).toBe(1);
    });
  });
});
