import React, { Component } from 'react';

import AddGoal from 'components/AddGoal';

/* component styles */
import styles from './styles';

export default class GoalsHeader extends Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    showAddGoal: React.PropTypes.bool,
    toggleAdd: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.onPlusClick = this.onPlusClick.bind(this);
  }

  onPlusClick() {
    this.props.toggleAdd();
  }

  render() {
    const { showAddGoal } = this.props;
    return (
      <div className={styles}>
      {
        showAddGoal ? <AddGoal {...this.props} />
                : <div className="plus" onClick={this.onPlusClick}>+</div>
      }
      </div>
    );
  }
}
