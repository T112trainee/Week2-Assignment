"use strict";
const books = [
    {
        title: 'Book',
        author: 'Name',
    },
    {
        title: 'Book2',
        author: 'Name2',
    },
];
let authorbooks = books
    .filter((book) => book.author == 'Name' || 'Name2')
    .map((book) => book.title);
console.log(authorbooks);
