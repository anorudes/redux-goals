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
    activeItem: React.PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.actions = bindActionCreators(actionCreators, this.props.dispatch);
    this.onSaveClick = this.onSaveClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  componentDidUpdate() {
    if (this.props.activeItem === null) return false;
    const { activeItem } = this.props;
    const item = activeItem;
    this.refs.text.value = item.text;
    this.refs.pos.value = item.pos;
  }

  onDeleteClick() {
    this.actions.del(this.props.activeItem.id);
    this.actions.close();
  }

  onSaveClick() {
    this.actions.save({
      id: this.props.activeItem.id,
      text: this.refs.text.value,
    });
    this.actions.changePos({
      id: this.props.activeItem.id,
      pos: this.refs.pos.value,
    });
  }

  render() {
    const { activeItem } = this.props;
    const item = activeItem;
    if (activeItem === null) return false;

    return (
      <div className={styles}>
        <h2>Edit Panel</h2>
        <span className="text">id: {activeItem.id}</span>
        Text:<br />
        <input type="text" ref="text" defaultValue={item.text} />
        Position:<br />
        <input type="text" ref="pos" defaultValue={item.pos} />
        <button className="add" onClick={this.onSaveClick}>Save</button>
        <button className="delete" onClick={this.onDeleteClick}>Delete</button>
      </div>
    );
  }
}
