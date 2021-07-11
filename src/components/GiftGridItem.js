import React from 'react';
import PropTypes from 'prop-types';

export const GiftGridItem = ({ url, title }) => {
    return (
        <div className='card glassmorphismo'>
            <p>{title}</p>
            <img src={url} alt={title} />
        </div>
    );
};

GiftGridItem.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
