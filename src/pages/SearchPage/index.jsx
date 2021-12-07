import {useEffect, useState} from "react";
import { Link, useSearchParams } from "react-router-dom";
import * as PropTypes from 'prop-types';
import Container from "../../layout/search/Container";
import { search } from "../../BooksAPI";
import Book from "../../components/Book";
import { getBookshelfFinder, handleResponse } from './utils';

const SearchPage = ({ bookBookshelfMap, handleBookshelfChange }) => {
    const findBookshelf = getBookshelfFinder(bookBookshelfMap);
    const [books, setBooks] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const q = searchParams.get('q');
    const handleInputChange = (e) => setSearchParams({ q: e.currentTarget.value });

    useEffect(() => {
        if (!q) {
            setBooks([]);

            return;
        }

        search(q).then((res) => setBooks(handleResponse(res)));
    }, [q])

    return (
        <Container>
            <div className="search-books-bar">
                <Link to="/" className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        value={q || ''}
                        onChange={handleInputChange}
                        placeholder="Search by title, author, or ISBN"
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    { books.map((book) => (
                        <Book
                            key={book.id}
                            book={{
                                ...book,
                                shelf: findBookshelf(book.id),
                            }}
                            handleBookshelfChange={handleBookshelfChange}
                        />
                    ))}
                </ol>
            </div>
        </Container>
    );
};

SearchPage.propTypes = {
    handleBookshelfChange: PropTypes.func.isRequired,
    bookBookshelfMap: PropTypes.shape({
        currentlyReading: PropTypes.arrayOf(PropTypes.string).isRequired,
        read: PropTypes.arrayOf(PropTypes.string).isRequired,
        wantToRead: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
}

export default SearchPage;
