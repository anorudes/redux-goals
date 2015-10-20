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

  _open() {
    const { index, open } = this.props;
    open(index);
  }

  render() {
    const activeClass = this.props.active ? 'active' : '';

    return (
      <div className={`${styles} ${activeClass}`} onClick={::this._open}>
        {this.props.item.text}
      </div>
    );
  }
}
