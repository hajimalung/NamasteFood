// lets show team members data in about us page and use class based components
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class AboutUs extends Component{
    constructor(props){
        super(props);

        console.log("in parent constructor!");
    }

    componentDidMount(){
        console.log("in parent component did mount?");
    }

    render(){
        console.log("in parender render!")
        return (<div>
            About us rendered!!
            <h1>This is Food ordering app!!</h1>
            <UserClass name={"baba (classic)"} location={"NGKL classic"}/>
            </div>);
    }
}

export default AboutUs;