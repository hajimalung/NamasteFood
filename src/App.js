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
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AboutUs from "./components/Aboutus";
import ContactUs from "./components/Contactus";
import Error from "./components/Error";

const AppLayout = ()=>{
    return (
    <div className="app">
        <Header />
        <Body />
        <Footer />
    </div>
    );
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout />,
        errorElement: <Error />
    },
    {
        path:"/aboutus",
        element:<AboutUs />
    },
    {
        path:"/contactus",
        element: <ContactUs />
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);