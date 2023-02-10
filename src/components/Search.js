import { useState } from "react";

const Search = (props) => {
    
    return (
        <div className="search-bar">
            <input type="text" id="search" placeholder="Search" icon="" defaultValue={""} onChange={props.filterSearchResults} />
        </div>
    );
}

export default Search;