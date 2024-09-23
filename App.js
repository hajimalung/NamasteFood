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
    const { name, 
            cuisines, 
            avgRating, 
            sla, 
            costForTwo, 
            cloudinaryImageId } = props?.resData?.info; // // ? -  is called optional chaining
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

const SearchBar = ()=>{
    return (
    <>
        <input type="text" className="search-control"></input>
        <button>Search</button>
    </>
    );
}

//swiggy restaurnat data
const Body = ()=>{
    return (
    <div className="body">
        <div className="search">
            <SearchBar />
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
                restaurantsList.map(res => (<RestaurantCard key={res.info.id} resData={res} />)) 
            }
        </div>
    </div>
    );
}

const Footer = () => {
    return (
    <div className="footer">
        ©Hajimalung
    </div>
    );
}

const AppLayout = ()=>{
    return (
    <div className="app">
        <Header />
        <Body />
        <Footer />
    </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);