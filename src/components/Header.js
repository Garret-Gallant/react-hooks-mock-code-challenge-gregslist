import React, {useState} from "react";
import Search from "./Search";

function Header( {handleSearch, search, setSearch} ) {
  
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search handleSearch={handleSearch} search={search} setSearch={setSearch} />
    </header>
  );
}

export default Header;
