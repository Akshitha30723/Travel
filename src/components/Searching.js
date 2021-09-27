import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './Dashboard.css';
function Search(){
    return(
        <div >
                     <button className="search-btn">
                    <SearchIcon/>
                    </button> 
                    <input 
                    type='text' 
                    className="searchcontrol" placeholder="Search"/>
                    </div>
    )
}
export default Search;