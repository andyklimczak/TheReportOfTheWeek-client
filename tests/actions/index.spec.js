import * as actions from '../../src/actions/';
import * as types from '../../src/actions/ActionTypes';


describe('actions', () => {
  it('should create an action to add an item', () => {
    const item = 'example two';
    const expectedAction = {
      type: types.ITEM__CREATE,
      item
    };

    expect(actions.addItemSuccess(item)).toEqual(expectedAction);
  });

  it('should create an action to add a flash message', () => {
    const text = 'A thing was successful!';
    const messageType = 'notification';
    const expectedAction = {
      type: types.FLASH_MESSAGE__CREATE,
      messageType,
      text
    };

    expect(actions.addFlashMessage(text, messageType)).toEqual(expectedAction);
  });

  it('should create an action to delete a flash message', () => {
    const timestamp = 12345;
    const expectedAction = {
      type: types.FLASH_MESSAGE__DELETE,
      timestamp
    };

    expect(actions.deleteFlashMessage(timestamp)).toEqual(expectedAction);
  });

  it('should create an action to set reports', () => {
    const reports = [
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

    const expectedAction = {
      type: types.REPORTS__GET,
      reports
    };

    expect(actions.setReports(reports)).toEqual(expectedAction);
  });

  it('should create an action to filter reports', () => {
    const reportCategory = 'Running On Empty';
    const expectedAction = {
      type: types.REPORTS__FILTER,
      reportCategory
    };

    expect(actions.filterReports(reportCategory)).toEqual(expectedAction);
  });
});
