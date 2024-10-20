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
        <div className="res-details flex flex-col m-5 overflow-hidden border border-solid border-gray-400 rounded-lg">
            <div className="res-header flex justify-between bg-green-100">
                <div className="res-header-left m-4 p-4">
                    <h1 className="font-bold text-4xl">{ resInfo?.name }</h1>
                    <h3>{ resInfo?.locality}</h3>
                    <p>{ resInfo?.sla?.slaString } - { resInfo?.costForTwoMessage }</p>
                </div>
                <div className="res-header-right h-96">
                    <img  
                        alt="restauratn image"
                        className="object-cover w-[100%] h-[100%]"
                        src={ IMAGE_CDN_URL + resInfo.cloudinaryImageId }
                        />
                </div>
            </div>
            <div className="res-body p-6">
                <h3 className="font-bold">Menu:</h3>
                <div className="menu-container flex flex-wrap">
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