import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AddGoal from 'components/AddGoal';

/* component styles */
import styles from './styles';

import * as actionCreators from 'actions/goals';

@connect(state => state.goals)
export default class GoalsHeader extends Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    showAddGoal: React.PropTypes.bool,
  }

  constructor(props) {
    super(props);
    this.actions = bindActionCreators(actionCreators, this.props.dispatch);
  }

  onPlusClick() {
    this.actions.toggleAdd();
  }

  render() {
    const { showAddGoal } = this.props;
    return (
      <div className={styles}>
      {
        showAddGoal ? <AddGoal actions={this.actions}/>
                : <div className="plus" onClick={::this.onPlusClick}>+</div>
      }
      </div>
    );
  }
}
