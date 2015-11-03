import { findDOMNode } from 'react-dom';

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
  hover(props, monitor, component) {
    
    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;
    props.moveGoal(monitor.getItem().id, props.item.pos);
  },
};