import Heading from "./Heading";
import * as PropTypes from 'prop-types';

const Container = ({ heading, children }) => (
    <>
        <Heading heading={heading} />
        <div className="list-books">{children}</div>
    </>
);

Container.propTypes = {
    heading: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
}

export default Container;
