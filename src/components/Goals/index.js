import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Goal from 'components/Goal';

/* component styles */
import styles from './styles';

@DragDropContext(HTML5Backend)
export default class Goals extends Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    items: React.PropTypes.array,
    activeItem: React.PropTypes.object,
    loadGoals: React.PropTypes.func,
    open: React.PropTypes.func,
    changePos: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.moveGoal = this.moveGoal.bind(this);
  }

  componentDidMount() {
    this.props.loadGoals();
  }

  moveGoal(id, pos) {
    this.props.changePos({
      id,
      pos,
    });
  }

  render() {
    const { items, activeItem } = this.props;
    return (
      <div className={styles}>
        {
          items.sort((a, b) => a.pos - b.pos).map((item, index) => (
              <Goal
                key={index}
                id={item.id}
                item={item}
                active={index === activeItem}
                open={this.props.open.bind(this)}
                moveGoal={this.moveGoal} />
            )
          )
        }
      </div>
    );
  }
}
