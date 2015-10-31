
import React, { Component } from 'react';
/* component styles */
import styles from './styles';

export default class Goal extends Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    item: React.PropTypes.object,
    open: React.PropTypes.func,
    active: React.PropTypes.bool,
    id: React.PropTypes.number,
  }

  onClick() {
    const { id, open } = this.props;
    open(id);
  }

  render() {
    const activeClass = this.props.active ? 'active' : '';

    return (
      <div className={`${styles} ${activeClass}`} onClick={::this.onClick}>
        {this.props.item.text}
      </div>
    );
  }
}
