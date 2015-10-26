import React, { Component } from 'react';

/* component styles */
import styles from './styles';

export default class AddGoal extends Component {
  static propTypes = {
    actions: React.PropTypes.array,
  }

  constructor(props) {
    super(props);
  }

  _handleClick() {
    if (this.refs.text.value === '') {
      return false;
    }

    // add new goal
    this.props.actions.add(this.refs.text.value);

    // clear input
    this.refs.text.value = '';
  }

  render() {
    const { actions } = this.props;
    return (
      <div className={styles}>
        <h2>New item:</h2>
        <input type="text" defaultValue="" ref="text" />
        <input type="button" value="Add Goal" onClick={::this._handleClick} />
        <div className="close" onClick={::actions.toggleAdd}>X</div>
      </div>
    );
  }
}
