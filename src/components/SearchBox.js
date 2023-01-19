import React from "react";
import './SearchBox.css';

const SearchBox = ({searchfield, searchChange}) => {
    return (
       <div class="search">
        <input class="input" 
        type="search" 
        placeholder="Search Robots" 
        onChange={searchChange}/>
        </div>
    );
}

export default SearchBox;