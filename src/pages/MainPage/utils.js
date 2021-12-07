import { mainPageShelves as shelves } from "../../data";

const getShelfFilter = (shelf) => (book) => book.shelf === shelf;
const makeBookshelf = (key, title, books) => ({ key, title, books });
export const organizeBooksByShelves = (books) => shelves.map(({key, title}) => (
    makeBookshelf(key, title, books.filter(getShelfFilter(key)))
));
