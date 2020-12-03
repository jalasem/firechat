import React from "react";
import SearchIcon from "../icons/SearchIcon";

export default function SearchForm() {
  return (
    <div className="SearchForm">
      <form>
        <SearchIcon
          style={{
            width: "1rem",
            marginRight: "1rem",
          }}
        />
        <input type="text" placeholder="Search or start new chat" />
      </form>
    </div>
  );
}
