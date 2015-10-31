import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Goal from 'components/Goal';

/* component styles */
import styles from './styles';

import { loadGoals } from 'actions/goals.js';

import * as actionCreators from 'actions/goals';

@connect(state => state.goals)
export default class Goals extends Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    items: React.PropTypes.array,
    activeItem: React.PropTypes.number,
  }

  constructor(props) {
    super(props);
    this.actions = bindActionCreators(actionCreators, this.props.dispatch);
  }

  componentDidMount() {
    loadGoals();
  }

  render() {
    const { items, activeItem } = this.props;

    return (
      <div className={styles}>
        {
          items.map((item, index) => <Goal
            key={index}
            index={index}
            item={item}
            active={index === activeItem}
            open={this.actions.open.bind(this)} />
          )
        }
      </div>
    );
  }
}
