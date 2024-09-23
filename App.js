/*!SECTION
    lets build a food ordering app like swiggy and zomato
*/

import React from "react";
import ReactDOM from "react-dom/client"

import "./index.css"

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
    console.log(props);
    return (
        <div className="res-card" style={styleCard}>
            <img 
            alt="restaurant logo"
            className="res-image" 
            src="https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg" />
            <h3>{props.resName}</h3>
            <h4>{props.resCuisine}</h4>
            <h4>{props.resRating } Stars</h4>
            <h4>{props.resDeliveryTime} Minutes</h4>
        </div>
    );
}

const Body = ()=>{
    return (
    <div className="body">
        <div className="search">
            Search Bar
        </div>
        <div className="res-container">
            <RestaurantCard resName="Biryanis and More" resCuisine="South, North Indian, Biryani, Asian" resRating="4.5" resDeliveryTime="38"/>
            <RestaurantCard resName="KFC" resCuisine="Kentukky Fried" resRating="4" resDeliveryTime="20"/>
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