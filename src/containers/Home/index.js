import React, { Component } from 'react';

import { EditGoalPanel, Goals } from 'components';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <Goals />
        <EditGoalPanel />
      </div>
    );
  }
}
