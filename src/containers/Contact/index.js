import React from 'react';
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

export const Contact = () => (
  <div>
    <DocumentMeta {...metaData} />
    Contact Page
  </div>
);
