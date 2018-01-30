import React, { Component } from 'react'; // we need to import react because
// the JSX tag is converted to javascript like React.createlement
// and if React is not defined it will throw an error.

// class way of defining.

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term : '' };
  }

  render() {

    // further minimized code
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={ event => this.onInputChange(event.target.value) }
        /><br />
      </div>
    );
  }

  onInputChange(term){
    this.setState({ term })
    this.props.onSearchTermChange(term);
  }
  // handleInputChange(event) {
  //   console.log(event.target);
  // }

}

// Functional wah of defining. Commented as we switched to class way
// of defining as we need to maintain the user values

// const SearchBar = () => { // short form of function.
//   // Also has different value for this keyword when used.
//   return <input />;
// }

export default SearchBar; // export to make it available in the
// files that import this file. When imported the naming has to
// be same as the eported name unless we use the default keyword.
// If a default value is import we can use a different name.
// Only one export can have default.
