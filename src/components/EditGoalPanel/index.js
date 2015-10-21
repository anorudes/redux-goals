import React, { Component } from 'react';
import { connect } from 'react-redux';

/* component styles */
import styles from './styles';

@connect(state => state.goals)
export default class EditGoalPanel extends Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    items: React.PropTypes.array,
    activeItem: React.PropTypes.numb,
  }

  render() {
    const { items, activeItem } = this.props;
    const item = items[activeItem];

    return (
      <div className={styles}>
        <span className="text">id: {activeItem}</span>
        <input type="text" defaultValue={item.text} />
        <button>Save</button>
      </div>
    );
  }
}
