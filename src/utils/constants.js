const IMAGE_CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
const APP_LOGO_URL ="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY=";
const REST_LISTING_API = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4434345&lng=78.3745776&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
const REST_DETALS_API = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.503629470788848&lng=78.41291170567274&restaurantId={$resId}&catalog_qa=undefined&submitAction=ENTER";

// in one file we can have only one default export
// export const ....... -> named exports from same file

export { 
    APP_LOGO_URL,
    IMAGE_CDN_URL,
    REST_LISTING_API,
    REST_DETALS_API };