function categoryToColor(category) {
  switch(category) {
    case 'Energy Crisis':
      return 'green';
    case 'Running On Empty':
      return 'red';
    case 'Drink Review':
      return 'aqua';
    case 'Meal Review':
      return 'violet';
    case 'Other':
      return 'mediumslateblue';
    case 'Travel Review':
      return 'fuchia';
    case 'Music Review':
      return 'gold';
    case 'Service Review':
      return 'dodgerblue';
    default:
      return 'salmon';
  }
}

export { categoryToColor };
