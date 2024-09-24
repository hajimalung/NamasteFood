import SearchBar from "./SearchBar";
import RestaurantCard from "./RestaurantCard";
import restaurantsList from "../utils/mockdata/restaurants";

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

export default Body;