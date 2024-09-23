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
    return (
        <div className="res-card" style={styleCard}>
            <img 
            alt="restaurant logo"
            className="res-image" 
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4> {avgRating } 🌟  :  { costForTwo }</h4>
            <h4>{sla.deliveryTime} Minutes</h4>
        </div>
    );
}

//swiggy respse restaurnat data
const resData = {
    "info": {
        "id": "1853",
        "name": "Cream Stone Ice Cream",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/9/079798c4-b6d7-451c-8e1f-1d0aec7cbfea_1853.jpg",
        "locality": "Kukatpally",
        "areaName": "Kukatpally",
        "costForTwo": "₹350 for two",
        "cuisines": [
            "Ice Cream",
            "Desserts",
            "Beverages",
            "Ice Cream Cakes"
        ],
        "avgRating": 4.5,
        "parentId": "289",
        "avgRatingString": "4.5",
        "totalRatingsString": "112K+",
        "sla": {
            "deliveryTime": 19,
            "lastMileTravel": 2.1,
            "serviceability": "SERVICEABLE",
            "slaString": "15-20 mins",
            "lastMileTravelString": "2.1 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-09-23 23:59:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Ice%20cream.png",
                    "description": "Delivery!"
                },
                {
                    "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
                    "description": "Delivery!"
                }
            ],
            "textExtendedBadges": [
                {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C"
                }
            ]
        },
        "isOpen": true,
        "type": "D",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "Delivery!",
                                "imageId": "Green%20Dot%20Awards/Best%20In%20Ice%20cream.png"
                            }
                        },
                        {
                            "attributes": {
                                "description": "Delivery!",
                                "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "",
                                "fontColor": "#7E808C",
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "options available"
                            }
                        }
                    ]
                }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "30% OFF",
            "subHeader": "UPTO ₹75"
        },
        "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
                "text": "BENEFITS",
                "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
            },
            "freedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "4.2",
                "ratingCount": "6.5K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/city/hyderabad/cream-stone-ice-cream-kukatpally-rest1853",
        "type": "WEBLINK"
    }
}

const Body = ()=>{
    return (
    <div className="body">
        <div className="search">
            Search Bar
        </div>
        <div className="res-container">
            <RestaurantCard resData={resData} />
            {/* {
                restaurantsList.map(res => (<RestaurantCard key={res.name} resData={res} />))
            } */}
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