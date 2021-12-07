import Container from "../../layout/main/Container";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import Bookshelf from "../../components/Bookshelf";
import { organizeBooksByShelves } from "./utils";
import SearchButton from "./SearchButton";
import * as PropTypes from 'prop-types';
import {book as bookType} from "../../types";

const MainPage = ({ books, loading, error, handleBookshelfChange }) => {
    const bookshelves = organizeBooksByShelves(books);

    let content;
    if (loading) content = <Loading />
    else if (error) content = <Error />
    else content = bookshelves.map((bookshelf) => (
        <Bookshelf
            {...bookshelf}
           handleBookshelfChange={handleBookshelfChange}
        />
    ))

    return (
        <Container heading="MyReads">
            <div className="list-books-content">
                { content }
            </div>
            <SearchButton />
        </Container>
    )
};

MainPage.propTypes = {
    books: PropTypes.arrayOf(PropTypes.shape(bookType)).isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    handleBookshelfChange: PropTypes.func.isRequired,
}

export default MainPage;
