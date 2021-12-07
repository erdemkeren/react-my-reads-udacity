import * as PropTypes from 'prop-types';

const Container = ({ children }) => <div className="search-books">{children}</div>;

Container.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
}

export default Container;
