import SearchBar from "./SearchBar";
import RestaurantCard from "./RestaurantCard";
import restaurantsList from "../utils/mockdata/restaurants";
import { useState } from "react";

//swiggy restaurnat data
const Body = ()=>{

    const [listOfRestaurants, setValue] = useState(restaurantsList);

    // const listOfRestaurants = restaurantsList;

    const filtertopRatedRestaurants = ()=>{
         setValue(restaurantsList.filter(restaurant => restaurant.info.avgRating>=4.2));
    };

    return (
    <div className="body">
        <div className="search">
            <SearchBar />
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