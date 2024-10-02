/*!SECTION
    lets build a food ordering app like swiggy and zomato
*/
import React, { StrictMode } from "react";
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
                path:"/contactus",
                element: <ContactUs />
            }],
        errorElement: <Error />
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);