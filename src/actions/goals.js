export function add(text) {
  return {
    type: 'ADD',
    text,
  };
}

export function del(index) {
  return {
    type: 'DELETE',
    index,
  };
}

export function open(index) {
  return {
    type: 'OPEN',
    index,
  };
}


export function save(index, text) {
  return {
    type: 'SAVE',
    index,
    text,
  };
}

export function loadedItems(items) {
  return {
    type: 'LOADED_ITEMS',
    items,
  };
}


