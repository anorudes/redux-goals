import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import * as actionCreators from 'actions/goals';

/* component styles */
import styles from './styles';

@connect(state => state.goals)
export default class GoalEditPanel extends Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    items: React.PropTypes.array,
    activeItem: React.PropTypes.number,
  }

  constructor(props) {
    super(props);
    this.actions = bindActionCreators(actionCreators, this.props.dispatch);
  }

  componentDidUpdate() {
    if (this.props.activeItem === -1) return false;
    const { items, activeItem } = this.props;
    const item = items[activeItem];
    this.refs.text.value = item.text;
  }

  onSaveClick() {
    this.actions.save({
      index: this.props.activeItem,
      text: this.refs.text.value,
    });
  }

  render() {
    const { items, activeItem } = this.props;
    const item = items[activeItem];
    if (activeItem === -1) return false;

    return (
      <div className={styles}>
        <h2>Edit Panel</h2>
        <span className="text">id: {activeItem}</span>
        <input type="text" ref="text" defaultValue={item.text} />
        <button onClick={::this.onSaveClick}>Save</button>
      </div>
    );
  }
}
