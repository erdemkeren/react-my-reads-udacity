export const handleResponse = (res) => res.error ? [] : res;
export const getBookshelfFinder = (mapping) => (bookId) => (
    Object.keys(mapping).reduce((acc, shelf) => (
        mapping[shelf].includes(bookId) ? shelf : acc
    ), 'none')
);

