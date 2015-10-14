import React, { Component } from 'react';

import DocumentMeta from 'react-document-meta';

const metaData = {
  title: 'Home Page',
  description: '',
  canonical: '',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags',
    },
  },
};

export default class Home extends Component {
  render() {
    return (
      <div>
        Home Page
      </div>
    );
  }
}
