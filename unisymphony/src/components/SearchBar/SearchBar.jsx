import React from 'react';
import "./SearchBar.css"
const SearchBar = ({modal, dataDispatch}) => {

    return (
        <div class="search-container">
        <div class="search-bar">
            <input type="text" placeholder="Search..." />
            <select name="filter">
                <option value="" selected disabled>Filter by...</option>
                <option value="job">Job</option>
                <option value="project">Project</option>
                <option value="internship">Internship</option>
                <option value="research">Research</option>
            </select>
            <button name='filter' className='search_bar-btn' onClick={() => {
                console.log("clicked")
                modal()}}>Post</button>
        </div>
    </div>    
    );
}

export default SearchBar;
