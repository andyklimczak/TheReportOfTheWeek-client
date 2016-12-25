import * as utils from '../../src/utils/utils.js';

describe('Category To Color', () => {
  it('Energy Crisis', () => {
    const result = utils.categoryToColor('Energy Crisis');
    expect(result).toEqual('green');
  });

  it('Running On Empty', () => {
    const result = utils.categoryToColor('Running On Empty');
    expect(result).toEqual('red');
  });

  it('Review', () => {
    const result = utils.categoryToColor('Review');
    expect(result).toEqual('grey');
  });

  it('Drink Review', () => {
    const result = utils.categoryToColor('Drink Review');
    expect(result).toEqual('aqua');
  });

  it('Meal Review', () => {
    const result = utils.categoryToColor('Meal Review');
    expect(result).toEqual('brown');
  });

  it('Default', () => {
    const result = utils.categoryToColor('Not A Real Category');
    expect(result).toEqual('salmon');
  });
});
