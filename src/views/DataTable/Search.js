import React, { useState } from "react";

function Search({ onSearch }) {
  const [search, setSearch] = useState("");
  const onInputChange = (value) => {
    setSearch(value);
    onSearch(value);
  };
  return (
    <input
      type="text"
      placeholder="Search"
      className="form-control"
      style={{ width: "240px" }}
      value={search}
      onChange={(e) => onInputChange(e.target.value)}
    />
  );
}
export default Search;
