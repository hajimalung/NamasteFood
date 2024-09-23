/*!SECTION
    lets build a food ordering app like swiggy and zomato
*/

import React from "react";
import ReactDOM from "react-dom/client"

import "./index.css"

import restaurantsList from "./mockdata/restaurants";

const Header = ()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY=" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Help</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

// inline css in jsx 
// it is not a preffered way to write 
const styleCard = {
    backgroundColor : "#f0f0f0"
};

// sending props to component and using  
const RestaurantCard = (props) => {
    const {name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId} = props.resData.info;
    const cloudinaryImageBaseURL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
    return (
        <div className="res-card" style={styleCard}>
            <img 
            alt="restaurant logo"
            className="res-image" 
            src={cloudinaryImageBaseURL+cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4> {avgRating } 🌟  :  { costForTwo }</h4>
            <h4>{sla.deliveryTime} Minutes</h4>
        </div>
    );
}

//swiggy respse restaurnat data

const Body = ()=>{
    return (
    <div className="body">
        <div className="search">
            Search Bar
        </div>
        <div className="res-container">
            {/* <RestaurantCard resData={resData} /> */}
            {
                restaurantsList.map(res => (<RestaurantCard key={res.name} resData={res} />))
            }
        </div>
    </div>
    );
}

const AppLayout = ()=>{
    return (
    <div className="app">
        <Header />
        <Body />
    {/*
        Body
        Builder
    */}
    </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);