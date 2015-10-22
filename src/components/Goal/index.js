import React, { Component } from 'react';

/* component styles */
import styles from './styles';

export default class Goal extends Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    item: React.PropTypes.object,
    open: React.PropTypes.func,
    active: React.PropTypes.bool,
    index: React.PropTypes.number,
  }

  _handleClick() {
    const { index, open } = this.props;
    open(index);
  }

  render() {
    const activeClass = this.props.active ? 'active' : '';

    return (
      <div className={`${styles} ${activeClass}`} onClick={::this._handleClick}>
        {this.props.item.text}
      </div>
    );
  }
}
