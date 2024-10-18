import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { APP_LOGO_URL } from "../utils/constants"; "../utils/constants";  // importing named exports with { }
const Header = ()=>{

    // we we dont provide dep array in useEffect it will call arrow func everytime the component renders
    // check by login/logout 
    // useEffect(()=>{console.log("Headers UseEffect!!!")});

    // if the dependency array is empty useEffet is called only intial render - only once
    // useEffect(()=>{console.log("Headers UseEffect!!!")},[]);

    const [textToShow, setTextToShow] = useState("Login");
    
    // if there is any state variable mention in dep array, it wil be called whenever there is a change in state variable
    useEffect(()=>{
        console.log("Headers UseEffect!!!");
        // if we return a function from here that will get called react unmounts this funtion
        return ()=>{
            console.log("unmounting header component!");
        }
    },[textToShow]);
    
    


    const onLoggerButtonClick = ()=>{
        setTextToShow(textToShow==="Login" ? "Logout" : "Login")

    }
    
    console.log("Header rendered!");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={ APP_LOGO_URL } />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                    {/* link is a wrapper over anchor tag but with routing capability */}
                        <Link to={"/"}>Home</Link>
                    </li>
                    {/* never use anchor tags for routing links? it will refresh the whole page , causing local state to lose */}
                    <li>
                        {/* <a href="/aboutus"> About Us </a> */}
                        <Link to="/aboutus"> About Us </Link>
                    </li>
                    <li>
                        <Link to={"/contactus"} >Contact Us</Link>
                    </li>
                    <li>Help</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={onLoggerButtonClick}>{textToShow}</button>
                </ul>
            </div>
        </div>
    );
}

// export component before importing
export default Header;