import React from 'react';
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

export const Home = () => (
  <div>
    <DocumentMeta {...metaData} />
  </div>
);
