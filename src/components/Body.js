import SearchBar from "./SearchBar";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { fetchSwiggyData } from "../utils/data-utils";
import CardsShimmer from "./CardsShimmer"; 

//swiggy restaurnat data
const Body = ()=>{

    
    const [originalList,setOriginalList] = useState([]);
    
    // this is normal js varible react does not know the data changes
    //let listOfRestaurants = restaurantsList;

    // need to creates state variable so that react will be keeping an eye on data change and react on dom
    // Local state variable, scoped to this component 
    const [listOfRestaurants, setlistOfRestaurants] = useState([]);  // array destructuring

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
            // read about optional chaingin for null or undefined checks
            const respFromList = resp?.data?.cards?.filter(card=>card.card.card.gridElements)?.filter(card=>card?.card?.card?.gridElements?.infoWithStyle?.restaurants).reduce((acc,curr)=>acc?.concat(curr.card.card.gridElements.infoWithStyle.restaurants),[]);
            console.log(respFromList);
            setOriginalList(respFromList);
            setlistOfRestaurants(respFromList);
        });

    }
    

    const filtertopRatedRestaurants = ()=>{
        setlistOfRestaurants(originalList.filter( restaurant => restaurant.info.avgRating >= 4 ));
        console.log("filtering")
    };

    const filterRestaurantsByName = (nameStringToMatch)=>{
        const filteredResult = originalList.filter(restaurant => restaurant.info.name.toLowerCase().includes(nameStringToMatch));
        if(filteredResult.length==0){
            console.error("no restaurants found with search query : "+nameStringToMatch);
            return;
        }
        setlistOfRestaurants(filteredResult);
        console.log("searching!!");
    }

    const searchQueryListener = (searchConfig)=>{
        const searchString = searchConfig.query;
        console.log("in body search "+searchString);
        filterRestaurantsByName(searchString);
    }

    // whenever there is a state variable update react triggeres reconciliation cycle( re renderes coponent!!! )
    // it is very fast and effiecient because of the diff algo dev by meta(react reconciliation or also known as react fiber architecture)
    console.log("body rendered!");
    
    // conditional rendering 
    
    if(listOfRestaurants.length==0){
        return (<>
            <div className="body">
                <div className="search"><SearchBar searchQueryListener={searchQueryListener} /></div>
                <div className="res-container">
                <CardsShimmer></CardsShimmer>
                </div>
            </div>
        </>);
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
               {
                // react need an unique id to identify individual card to optimize its render cycles
                // at same level components
                // if dont give keys then for any change in this level react re renders all cards
                // if we give keys it will become easy for react to identify and rerender that particular card
                // no is (not recomended) - ⚠️
                // index as key (not recomended) - ‼️
                // unique key - (best practice ) - ☮️ 
                listOfRestaurants.map(res => (<RestaurantCard key={res.info.id} resData={res} />)) 
                }
        </div>
    </div>
    );
}

export default Body;