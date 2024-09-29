import { useState } from "react";
import { APP_LOGO_URL } from "../utils/constants"; "../utils/constants";  // importing named exports with { }
const Header = ()=>{

    const [textToShow, setTextToShow] = useState("Login");


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
                    <li>Home</li>
                    <li>About us</li>
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