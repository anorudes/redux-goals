import React, { Component } from 'react';
import { connect } from 'react-redux';

/* component styles */
import styles from './styles';

@connect(state => state.goals)
export default class EditGoalPanel extends Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
  }

  render() {
    return (
      <div className={styles}>
        Edit Panel
      </div>
    );
  }
}
