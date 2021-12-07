import * as PropTypes from 'prop-types';
import { book as bookType } from "../../types";
import { shelfOptions as options } from "../../data";

const ShelfChanger = ({ book, handleBookshelfChange }) => (
    <div className="book-shelf-changer">
        <select
            value={book.shelf || 'none'}
            onChange={(e) => handleBookshelfChange({
                ...book,
                shelf: e.currentTarget.value,
            })}
        >
            <option disabled>Move to...</option>
            { options.map(({ key, title }) => (
                <option key={key} value={key}>{title}</option>
            ))}
        </select>
    </div>
);

ShelfChanger.propTypes = {
    book: PropTypes.shape(bookType).isRequired,
    handleBookshelfChange: PropTypes.func.isRequired,
}

export default ShelfChanger;
