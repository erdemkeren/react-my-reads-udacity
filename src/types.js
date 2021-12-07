import * as PropTypes from 'prop-types';

export const book = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string),
    shelf: PropTypes.string,
    imageLinks: PropTypes.shape({
        smallThumbnail: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
    }),
};
