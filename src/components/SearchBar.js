import React, { useState } from "react";

const SearchBar = (props)=>{

    const { searchQueryListener } = props;
    const [searchQuery, setSearchQuery] = useState("");


    const searchString = ()=>{
        console.log("search for "+searchQuery);
        if(searchQueryListener){
            searchQueryListener.call(null,{ query:searchQuery });
        }
    }

    console.log("Search Rendered!");
    
    return (
    <>
        <input type="text" className="search-control" value={searchQuery} onChange={(e)=>{setSearchQuery(e.target.value)}}></input>
        <button onClick={searchString}>Search</button>
    </>
    );

}
export default SearchBar;