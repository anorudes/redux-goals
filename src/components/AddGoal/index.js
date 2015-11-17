import React, { Component } from 'react';

/* component styles */
import styles from './styles';

export default class AddGoal extends Component {
  static propTypes = {
    actions: React.PropTypes.object,
    add: React.PropTypes.func,
    toggleAdd: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.onCloseClick = this.onCloseClick.bind(this);
    this.onAddClick = this.onAddClick.bind(this);
  }

  onAddClick() {
    if (this.refs.text.value === '') {
      return false;
    }

    // add new goal
    this.props.add(this.refs.text.value);

    // clear input
    this.refs.text.value = '';
  }

  onCloseClick() {
    this.props.toggleAdd();
  }

  render() {
    return (
      <div className={styles}>
        <h2>New item:</h2>
        <input type="text" defaultValue="" ref="text" />
        <input type="button" value="Add Goal" onClick={this.onAddClick} />
        <div className="close" onClick={this.onCloseClick}>X</div>
      </div>
    );
  }
}
