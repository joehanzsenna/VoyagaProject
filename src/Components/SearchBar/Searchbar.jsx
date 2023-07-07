import React from "react";

const Searchbar = () => {
  return (
    // <div>
      <form className="HomeSec1ContentsForm">
        <input
          type="text"
          name="search"
          placeholder="Search for Tours.."
          id=""
          className="HomeSec1ContentsFormSearch"
        />
        <button className="HomeSec1ContentsFormBtn" type="submit">
          Find Now
        </button>
      </form>
    // </div>
  );
};

export default Searchbar;
