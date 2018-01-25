import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar' // since its not a lib file
// we have to specify the path. Also we can use a different name in place of
// SearchBar as its a default export.

const API_KEY = 'AIzaSyB2exktkamhieGx0RxKOOR14-tHMLlkbhU';

// Create a component and this component should produce an HTML
const App = function () {
  return (
    <div>
      <SearchBar />
    </div>
  );
}
// Take this components HTML and put it on the page(ie. in the DOM)
ReactDOM.render(<App />,document.querySelector('.container'));
