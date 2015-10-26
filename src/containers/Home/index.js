import React, { Component } from 'react';

import GoalEditPanel from 'components/GoalEditPanel';
import GoalsHeader from 'components/GoalsHeader';
import Goals from 'components/Goals';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <GoalsHeader />
        <Goals />
        <GoalEditPanel />
      </div>
    );
  }
}
