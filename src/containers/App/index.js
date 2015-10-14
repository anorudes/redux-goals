import React, { Component } from 'react';
import { Link } from 'react-router';
import 'bootstrap-webpack';

/* global styles */
import 'style!./styles/app.scss';

import { Header, Footer } from 'components';
import { Home } from 'containers';

export class App extends Component {
  static propTypes = {
    children: React.PropTypes.any,
  }
  render() {
    return (
      <div>
        <Header />
        <main className="container">
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
}
