import React from 'react';
import Book from '../Book';
import { book as bookType } from '../../types'
import * as PropTypes from 'prop-types';

const Bookshelf = ({ title, books, handleBookshelfChange }) => (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                { books.map((book) => (
                    <li key={book.id}>
                        <Book book={book} handleBookshelfChange={handleBookshelfChange} />
                    </li>
                ))}
            </ol>
        </div>
    </div>
);

Bookshelf.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(
        PropTypes.shape({id: PropTypes.string.isRequired, ...bookType}),
    ).isRequired,
    handleBookshelfChange: PropTypes.func.isRequired,
};

export default Bookshelf;
