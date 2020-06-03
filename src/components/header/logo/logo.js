import React from 'react';
import PropTypes from 'prop-types';

import LogoImg from './logo.svg';

const Logo = () => (
  <a href={'/'}>
    <img src={LogoImg} alt="logo" />
  </a>
);

Logo.propTypes = {
  logoImg: PropTypes.shape({
    src: PropTypes.string.isRequired,
  }),
};

export default Logo;
