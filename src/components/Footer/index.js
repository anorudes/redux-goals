import React from 'react';

/* component styles */
import styles from './styles';

export const Footer = () => (
  <footer className={`${styles} footer`}>
    <div className="container">
      <a className="footer__link" href="http://github">github.com/redux-goals</a>
    </div>
  </footer>
);
