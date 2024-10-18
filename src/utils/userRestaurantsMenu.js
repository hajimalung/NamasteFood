// react will understand any function as hook if it starts with keyword use
// creating custom hook
import { useEffect, useState } from "react";
import { fetchRestaurantDetails, getResInfoFromCards } from "../utils/data-utils";
const useRestaurantMenu = (resId)=>{

    const [resMenu,setResMenu] = useState(null);

    useEffect(()=>{

        const resp = fetchRestaurantDetails(resId);
        resp.then(data=>{
            const cardArray = data.data.cards;
            const resInfo = getResInfoFromCards(cardArray);
            
            setResMenu(resInfo);
        });
    },[]);

    return resMenu;
}

export default useRestaurantMenu;