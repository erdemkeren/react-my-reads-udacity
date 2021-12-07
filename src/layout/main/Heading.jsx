import React from 'react';
import * as PropTypes from 'prop-types';

const Heading = ({ heading }) => (
    <div className="list-books-title">
        <h1>{heading}</h1>
    </div>
);

Heading.propTypes = {
    heading: PropTypes.string.isRequired,
};

export default Heading;
