import { loadedItems } from 'actions/goals.js';

export const fetchItems = (dispatch) => {
  fetch('/data/items.json')
      .then(response => response.json())
      .then(data => dispatch(loadedItems(data)));
};
