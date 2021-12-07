import React, { useEffect, useState } from 'react';
import { getAll, update } from './BooksAPI';
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import NotFound from "./pages/ErrorNotFound";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import "./App.css";

const defaultBookBookShelfMap = {
    currentlyReading: [],
    read: [],
    wantToRead: [],
};

const createBookBookshelfMap = (books) => {
    return books.reduce((mapping, book) => {
        if (!book.shelf) {
            return mapping;
        }

        mapping[book.shelf] = [...mapping[book.shelf], book.id];

        return mapping;
    }, defaultBookBookShelfMap);
}

const App = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [bookBookshelfMap, setBookBookshelfMap] = useState(defaultBookBookShelfMap);

    useEffect(() => {
        getAll()
            .then((books) => {
                setBooks(books);
                setBookBookshelfMap(createBookBookshelfMap(books));
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, []);

    const changeBookshelf = async (updatedBook) => {
        try {
            const updatedBookBookshelfMap = await update(updatedBook, updatedBook.shelf);

            if (!books.find((book) => book.id === updatedBook.id)) {
                setBooks([...books, updatedBook]);
            } else {
                setBooks(books.map((book) => (
                    book.id === updatedBook.id
                        ? updatedBook
                        : book
                )).filter((book) => book.shelf !== 'none'));
            }

            setBookBookshelfMap(updatedBookBookshelfMap);

            return true;
        } catch (e) {
            console.log(e);

            return false;
        }
    }

    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route
                        exact path="/"
                        element={(
                            <MainPage
                                books={books}
                                loading={loading}
                                error={error}
                                handleBookshelfChange={changeBookshelf}
                            />
                        )}
                    />
                    <Route
                        exact path="/search"
                        element={(
                            <SearchPage
                                handleBookshelfChange={changeBookshelf}
                                bookBookshelfMap={bookBookshelfMap}
                            />
                        )}
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
