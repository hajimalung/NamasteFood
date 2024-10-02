import { IMAGE_CDN_URL } from "../utils/constants";

// inline css in jsx 
// it is not a preffered way to write 
const styleCard = {
    backgroundColor : "#ffffff"
};

// sending props to component and using  
const RestaurantCard = (props) => {
    const { name, 
            cuisines, 
            avgRating, 
            sla, 
            costForTwo, 
            cloudinaryImageId } = props?.resData?.info; // // ? -  is called optional chaining
    return (
        <div className="res-card" style={styleCard}>
            <img 
            alt="restaurant logo"
            className="res-image" 
            src={ IMAGE_CDN_URL + cloudinaryImageId } 
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4> {avgRating } 🌟  :  { costForTwo }</h4>
            <h4>{sla.deliveryTime} Minutes</h4> 
        </div>
    );
}

export default RestaurantCard;