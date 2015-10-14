import React from 'react';
import { Link } from 'react-router';
import DocumentMeta from 'react-document-meta';
import 'bootstrap-webpack';

/* global styles */
import 'style!./styles/app.scss';

/* application components */
import { Header, Typography, Footer } from 'components';

const metaData = {
  title: 'Redux Easy Boilerplate',
  description: 'I am a description, and I can to create a multiple tags',
  canonical: 'http://example.com/path/to/page',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags',
    },
  },
};

export const App = (props) => (
  <div>
    <header>
    </header>
    <main>
      main
    </main>
    <footer>
    </footer>
  </div>
);
