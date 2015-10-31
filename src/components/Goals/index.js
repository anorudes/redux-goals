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
    activeItem: React.PropTypes.object,
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
          items.sort((a, b) => a.pos - b.pos).map((item, index) => (
              <Goal
                key={index}
                id={item.id}
                item={item}
                active={index === activeItem}
                open={this.actions.open.bind(this)} />
            )
          )
        }
      </div>
    );
  }
}
