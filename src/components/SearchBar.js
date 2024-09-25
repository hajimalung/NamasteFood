const SearchBar = (props)=>{

    const { searchQueryListener } = props;


    const searchString = ()=>{
        var searchQuery = document.getElementById("search").value;
        console.log("search for "+searchQuery);
        if(searchQueryListener){
            searchQueryListener.call(null,{ query:searchQuery });
        }
    }
    
    return (
    <>
        <input type="text" className="search-control" id="search"></input>
        <button onClick={searchString}>Search</button>
    </>
    );

}
export default SearchBar;