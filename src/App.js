/*!SECTION
    lets build a food ordering app like swiggy and zomato
*/
import React, { StrictMode, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client"

import "../index.css"

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// createBrowserRouter will help in creating route config
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import AboutUs from "./components/Aboutus";
import ContactUs from "./components/Contactus";
import Error from "./components/Error";
import RestaurantDetails from "./components/ResaurantDetails";
import CardsShimmer from "./components/CardsShimmer";
// import Grocery from "./components/Grocery";

// chunking .. this is the process of making smaller bundles 
// code splitting
// dynamic bundling
// also called lazy oading bundles or chunks
// on demand loading
// a bundle should have enough code for a feature

const Grocery = lazy(()=>import("./components/Grocery"));
// this also leads to failing the route with error when we go to grocery
// react tries to load this component but component code takes some time reach browser
// that is why react suspends to load the component
// we use suspense component given by react to overcome this problem!!



const AppLayout = ()=>{
    return (
    <div className="app">
        <Header />
        <Outlet />
        <Footer />
    </div>
    );
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout />,
        children:[
            {
                path:"/",
                element:<Body />
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantDetails />
            },
            {
                path:"/aboutus",
                element:<AboutUs />
            },
            {
                path:"/grocery",
                element: <Suspense fallback={<CardsShimmer></CardsShimmer>} > <Grocery /> </Suspense>
            },
            {
                path:"/contactus",
                element: <ContactUs />
            }],
        errorElement: <Error />
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);