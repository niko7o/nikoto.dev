import React from 'react';

import './Footer.scss';

const Footer = () => (
  <div className="footer">
    <a 
      className="github-button" 
      href="https://github.com/nikotomad/nikoto.dev" 
      data-color-scheme="no-preference: dark; light: dark; dark: dark;" 
      data-size="large" 
      data-show-count="true" 
      aria-label="Star nikotomad/nikoto.dev on GitHub"
    >
      Stars
    </a>
  </div>
);

export default Footer;