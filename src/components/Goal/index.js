import React, { Component } from 'react';
import { DragSource, DropTarget } from 'react-dnd';

import { goalSource, goalTarget } from './_drag.js';

/* component styles */
import styles from './styles';

@DropTarget('goal', goalTarget, connect => ({
  connectDropTarget: connect.dropTarget(),
}))
@DragSource('goal', goalSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))
export default class Goal extends Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    item: React.PropTypes.object,
    open: React.PropTypes.func,
    active: React.PropTypes.bool,
    id: React.PropTypes.number,
    moveGoal: React.PropTypes.func,
    connectDragSource: React.PropTypes.func.isRequired,
    connectDropTarget: React.PropTypes.func.isRequired,
    isDragging: React.PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { id, open } = this.props;
    open(id);
  }

  render() {
    const activeClass = this.props.active ? 'active' : '';
    const { isDragging, connectDragSource, connectDropTarget } = this.props;
    const opacity = isDragging ? 0 : 1;

    return connectDragSource(connectDropTarget(
      <div className={`${styles} ${activeClass}`} onClick={this.onClick} style={{ opacity }}>
        {this.props.item.text}
      </div>
    ));
  }
}
