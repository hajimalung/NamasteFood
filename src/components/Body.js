import SearchBar from "./SearchBar";
import RestaurantCard from "./RestaurantCard";
import restaurantsList from "../utils/mockdata/restaurants";
import { useState } from "react";
import restaurants from "../utils/mockdata/restaurants";

//swiggy restaurnat data
const Body = ()=>{
    
    // this is normal js varible react does not know the data changes
    //let listOfRestaurants = restaurantsList;

    // need to creates state variable so that react will be keeping an eye on data change and react on dom
    // Local state variable, scoped to this component 
    const [listOfRestaurants, setlistOfRestaurants] = useState(restaurantsList);  // array destructuring
    

    const filtertopRatedRestaurants = ()=>{
        setlistOfRestaurants(restaurantsList.filter( restaurant => restaurant.info.avgRating >= 4 ));
    };

    const filterRestaurantsByName = (nameStringToMatch)=>{
        setlistOfRestaurants(restaurantsList.filter(restaurant => restaurant.info.name.toLowerCase().includes(nameStringToMatch)));
    }

    const searchQueryListener = (searchConfig)=>{
        const searchString = searchConfig.query;
        console.log("in body search "+searchString);
        filterRestaurantsByName(searchString);
    }

    return (
    <div className="body">
        <div className="search">
            <SearchBar searchQueryListener={searchQueryListener} />
            <div className="filters">
                <button className="filter-btn" onClick={filtertopRatedRestaurants}> Top Rated Restaurants </button>
            </div>
        </div>
        <div className="res-container">
               { getBodyFor(listOfRestaurants) }
        </div>
    </div>
    );
}
function getBodyFor(listOfRestaurants){
    if(listOfRestaurants.length==0){
        return (<>No Restaurants found!! 😭</>);
    }else{
        // react need an unique id to identify individual card to optimize its render cycles
    // at same level components
    // if dont give keys then for any change in this level react re renders all cards
    // if we give keys it will become easy for react to identify and rerender that particular card
    // no is (not recomended) - ⚠️
    // index as key (not recomended) - ‼️
    // unique key - (best practice ) - ☮️ 
    return listOfRestaurants.map(res => (<RestaurantCard key={res.info.id} resData={res} />))
    }
}

export default Body;