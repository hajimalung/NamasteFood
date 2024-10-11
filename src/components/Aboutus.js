// lets show team members data in about us page and use class based components
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

// if there are multipl child componentes to be mounted the lifecycle will look like
// parent contructor -> parent render -> child1 constructor -> child1 render -> child2 constructor -> child2 render ...... -> child1 component did mount -> child2 component did mount -> parnet component did mount

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
                <UserClass name={"baba (classic 2)"} location={"NGKL classic"}/>
            </div>);
    }
}

export default AboutUs;