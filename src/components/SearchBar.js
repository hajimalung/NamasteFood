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
    <div className="mr-4">
        <input type="text" className="search-contro border border-solid border-purple-500 rounded" value={searchQuery} onChange={(e)=>{setSearchQuery(e.target.value)}}></input>
        <button onClick={searchString} className="px-4 py-1 bg-green-400 m-4 rounded hover:bg-green-600">Search</button>
    </div>
    );

}
export default SearchBar;