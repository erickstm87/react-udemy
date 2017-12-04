const React = require('react');
const ReactDOM = require('react-dom');
const Search = require('./components/search.js');
const SearchBar = require('./components/searchbar.js');
const Results = require('./components/results.js');
const Result = require('./components/result.js');
const products = require('./products.js');

ReactDOM.render(<Search products={products}/>, document.getElementById('app'));
