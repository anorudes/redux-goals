import React, { Component } from 'react';

import DocumentMeta from 'react-document-meta';

const metaData = {
  title: 'About Page',
  description: '',
  canonical: '',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags',
    },
  },
};
export default class About extends Component {
  render() {
    return (
      <div>
        <DocumentMeta {...metaData} />
        About Page test
      </div>
    );
  }
}
