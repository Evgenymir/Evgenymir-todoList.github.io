import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

const Header = ({ title }) => (
    <div className="header">{title}</div>
);

Header.defaultProps = {
    title: 'Enter application name',
};

Header.propTypes = {
    title: PropTypes.string,
};

export default Header;
