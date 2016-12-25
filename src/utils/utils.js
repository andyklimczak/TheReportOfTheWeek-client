function categoryToColor(category) {
  switch(category) {
    case 'Energy Crisis':
      return 'green';
    case 'Running On Empty':
      return 'red';
    case 'Review':
      return 'grey';
    case 'Drink Review':
      return 'aqua';
    case 'Meal Review':
      return 'violet';
    default:
      return 'salmon';
  }
}

export { categoryToColor };
