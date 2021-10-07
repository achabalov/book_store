const { default: Author } = require("../components/author/Author");
const { default: BooksList } = require("../components/books/BooksList");

export const publicRoute = [
    {path: '/', component: BooksList, exact: true},
    {path: '/author', component: Author, exact: true}
]