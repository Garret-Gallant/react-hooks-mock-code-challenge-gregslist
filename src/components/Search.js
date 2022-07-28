import React, {useState} from "react";

function Search( {setSearch} ) {

  return (
    <form className="searchbar">
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
}

export default Search;
