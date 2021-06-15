import React, { Component } from "react";

class SearchBar extends Component {

  searchHanlder = (e) => {
    this.props.onSearch(e.target.value);
  }

  render() {
    return (
      <div >
        <input type="text" name="search" placeholder="Search"  onChange={this.searchHanlder} className="input w-full" />
      </div>
    )
  }
}

export default SearchBar;
  