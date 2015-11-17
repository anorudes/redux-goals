import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import GoalEditPanel from 'components/GoalEditPanel';
import GoalsHeader from 'components/GoalsHeader';
import Goals from 'components/Goals';

import * as actionCreators from 'actions/goals';

@connect(
  state => state.goals,
  dispatch => bindActionCreators(actionCreators, dispatch)
)
export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Goals list</h1>
        <GoalsHeader {...this.props} />
        <Goals {...this.props} />
        <GoalEditPanel {...this.props} />
      </div>
    );
  }
}
