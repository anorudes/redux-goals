export function add(text) {
  return {
    type: 'ADD',
    text,
  };
}

export function del(index) {
  return {
    type: 'DELETE',
    id,
  };
}

export function open(index) {
  return {
    type: 'OPEN',
    index,
  };
}
