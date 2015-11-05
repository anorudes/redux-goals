export const goalSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index,
      pos: props.pos,
    };
  },
};

export const goalTarget = {
  hover(props, monitor) {
    props.moveGoal(monitor.getItem().id, props.item.pos);
  },
};
