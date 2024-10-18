import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


import CardsShimmer from "./CardsShimmer";
import ItemCard from "./ItemCard";
import { IMAGE_CDN_URL } from "../utils/constants";
// importing custom hook
import useRestaurantMenu from "../utils/userRestaurantsMenu";


const RestaurantDetails = ()=>{
    // build vegOnly toggle
    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    return resInfo==null ? <CardsShimmer /> :  (
        <div className="res-details">
            <div className="res-header">
                <div className="res-header-left">
                    <h1>{ resInfo?.name }</h1>
                    <h3>{ resInfo?.locality}</h3>
                    <p>{ resInfo?.sla?.slaString } - { resInfo?.costForTwoMessage }</p>
                </div>
                <div className="res-header-right">
                    <img  
                        alt="restauratn image"
                        src={ IMAGE_CDN_URL + resInfo.cloudinaryImageId }
                        />
                </div>
            </div>
            <div className="res-body">
                <h3>Menu</h3>
                <div className="menu-container">
                    {
                        resInfo?.menuItemCards.map( (menuItemCard,index) => (
                            <ItemCard key={menuItemCard.card.info.id+"_"+index} itemInfo={menuItemCard.card.info} />
                        ))
                    }
                </div>
            </div>

        </div>
    );
}

export default RestaurantDetails;