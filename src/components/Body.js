import SearchBar from "./SearchBar";
import RestaurantCard from "./RestaurantCard";
import restaurantsList from "../utils/mockdata/restaurants";
import { useState, useEffect } from "react";
import { fetchSwiggyData } from "../utils/data-utils";

//swiggy restaurnat data
const Body = ()=>{
    
    // this is normal js varible react does not know the data changes
    //let listOfRestaurants = restaurantsList;

    // need to creates state variable so that react will be keeping an eye on data change and react on dom
    // Local state variable, scoped to this component 
    const [listOfRestaurants, setlistOfRestaurants] = useState(restaurantsList);  // array destructuring

    // this call back function is called after the component is rendered!
    useEffect(()=>{
        console.log("useEffect called!");
        fetchData();
    },[]); // dependency array , if this is empty the effect will be called only once

    const fetchData = async ()=>{
        // this will return a promise instead of chaining it with .then .catch ... we will use async await
        // const dataFromApi = await fetch(
        //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.503629470788848&lng=78.41291170567274&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        // ); 

        // const respJSON = await dataFromApi.json();
        // const cardsData = respJSON.data.cards;
        // // console.log(cardsData); 
        // const restListCard = cardsData.filter(card => card.card.card.id=="restaurant_grid_listing")[0];
        // const rList = restListCard.card.card.gridElements.infoWithStyle
        const respJson =  fetchSwiggyData();
        
        respJson.then(resp=>{
            console.log(resp)
            const restaurantListRespArr = resp.data.cards.filter(card=>card.card.card.gridElements).filter(card=>card.card.card.gridElements.infoWithStyle.restaurants).reduce((acc,curr)=>acc.concat(curr.card.card.gridElements.infoWithStyle.restaurants),[]);
            console.log(restaurantListRespArr);
            setlistOfRestaurants(restaurantListRespArr);
        });

    }
    

    const filtertopRatedRestaurants = ()=>{
        setlistOfRestaurants(restaurantsList.filter( restaurant => restaurant.info.avgRating >= 4 ));
        console.log("filtering")
    };

    const filterRestaurantsByName = (nameStringToMatch)=>{
        setlistOfRestaurants(restaurantsList.filter(restaurant => restaurant.info.name.toLowerCase().includes(nameStringToMatch)));
        console.log("searching!!");
    }

    const searchQueryListener = (searchConfig)=>{
        const searchString = searchConfig.query;
        console.log("in body search "+searchString);
        filterRestaurantsByName(searchString);
    }

    console.log("body rendered!");

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