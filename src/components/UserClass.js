
// a js class that extends React.Copmonent becomes a class based component
import React from "react";

// constructor will receive the props, we need to call super with props


// life cycle constructor -> render -> coponentDidMount
// if any child component is ther in jsx before mounting parent component
// child component constructor -> child render -> child componentDidMount? will get called

// parent constructor -> parent render -> child constructor -> child render -> child mounted -> parent mounted 
// dom gets updated after render phase and before commit phase
class UserClass extends React.Component{

    intervalId;

    constructor(props){
        super(props); // dont forget this - why to super(props) is homework?
        // this is the best place to create state variables
        this.state ={
            userInfo : {
                name : "John Doe",
                public_repos : 0
            }
        }   // this is reserved in react class components
        console.log(this.props.name+"constructor got called first!!");
    }

    async componentDidMount(){

        this.intervalId = setInterval(()=>{
            console.log("functional are awesome!");
        },1000);

        console.log(this.props.name+"component did mount got called third!");
        // mostly component did mount is used to make API calls once the component is atached to dom 
        const respPromise = fetch("https://api.github.com/users/hajimalung")
        .then(resp => resp.json())
        .then(dataJSON => this.setState({
            userInfo : dataJSON
        }));
    }
    componentDidUpdate(){
        console.log("component did update!!");
    }
    componentWillUnmount(){
        clearInterval(this.intervalId);
        console.log("component will get unmounted!");
    }

    // always need to use this. 
    render(){
        const { name, location, avatar_url } = this.state.userInfo;
        console.log(this.props.name+"render got called second!!");
        return (
        <div className="user-card">
            <img src={avatar_url}></img>
            <h2>Name: {name}</h2>
            <h3>Location : {location}</h3>
            <h6>{location}</h6>
        </div>);
    }
}

export default UserClass;