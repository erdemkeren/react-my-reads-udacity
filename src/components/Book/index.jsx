import ShelfChanger from "./ShelfChanger";
import { book as bookType } from "../../types";
import styles from './styles';
import * as PropTypes from 'prop-types';

const thumbnail = (url) => url || 'thumb.jpeg';

const Book = ({ book, handleBookshelfChange }) => (
    <div className="book">
        <div className="book-top">
            <div
                className="book-cover"
                style={{
                    ...styles.cover,
                    backgroundImage: `url(${thumbnail(book.imageLinks?.smallThumbnail)})`,
                }}
            />
            <ShelfChanger
                book={book}
                handleBookshelfChange={handleBookshelfChange}
            />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
            { book.authors ? book.authors.map((author) => <span key={author} style={{ display: 'block' }}>{author}</span>) : ''}
        </div>
    </div>
);

Book.propTypes = {
    book: PropTypes.shape(bookType).isRequired,
    handleBookshelfChange: PropTypes.func.isRequired,
};

export default Book;
