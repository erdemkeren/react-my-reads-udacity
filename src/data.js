export const bookshelves = [{
    key: 'currentlyReading',
    title: 'Currently Reading',
    isOption: true,
    isVisibleOnMainPage: true,
}, {
    key: 'wantToRead',
    title: 'Want to Read',
    isOption: true,
    isVisibleOnMainPage: true,
}, {
    key: 'read',
    title: 'Read',
    isOption: true,
    isVisibleOnMainPage: true,
}, {
    key: 'none',
    title: 'None',
    isOption: true,
    isVisibleOnMainPage: false,
}];

export const shelfOptions = bookshelves.filter((bookshelf) => bookshelf.isOption);
export const mainPageShelves = bookshelves.filter((s) => s.isVisibleOnMainPage);
