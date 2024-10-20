import { IMAGE_CDN_URL } from "../utils/constants";

// inline css in jsx 
// it is not a preffered way to write 
const styleCard = {
    backgroundColor : "#fafafa"
};

// sending props to component and using  
const RestaurantCard = (props) => {
    const { name, 
            cuisines, 
            avgRating, 
            sla, 
            costForTwo, 
            cloudinaryImageId } = props?.resData?.info; // // ? -  is called optional chaining
            // [ ] in tailwind css uses specific value
    return (
        <div className="res-card m-4 p-4 w-[200px] border border-solid border-gray-100 rounded shadow-sm hover:shadow-lg hover:scale-110" style={styleCard}>
            <img 
            alt="restaurant logo"
            className="res-image rounded" 
            src={ IMAGE_CDN_URL + cloudinaryImageId } 
            />
            <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4> {avgRating } 🌟  :  { costForTwo }</h4>
            <h4>{sla.deliveryTime} Minutes</h4> 
        </div>
    );
}

export default RestaurantCard;