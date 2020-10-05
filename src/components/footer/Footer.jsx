import React from 'react';
import PropTypes from 'prop-types';
import './Footer.scss';

const Footer = ({ author }) => (
    <div className="footer">
        <span className="footer__copyright">&copy;</span>
        {author}
    </div>
);

Footer.defaultProps = {
    author: 'Enter name author',
};

Footer.propTypes = {
    author: PropTypes.string,
};

export default Footer;
