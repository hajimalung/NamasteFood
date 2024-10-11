
// a js class that extends React.Copmonent becomes a class based component
import React from "react";

// constructor will receive the props, we need to call super with props


// life cycle constructor -> render -> coponentDidMount
// if any child component is ther in jsx before mounting parent component
// child component constructor -> child render -> child componentDidMount? will get called

// parent constructor -> parent render -> child constructor -> child render -> child mounted -> parent mounted 
class UserClass extends React.Component{

    constructor(props){
        super(props); // dont forget this - why is homework?
        console.log(props);
        // this is the best place to create state variables
        this.state ={
            count : 0,
            count2 : 5
        }   // this is reserved in react class components
        console.log("constructor got called first!!");
    }

    increaseCnt(){
        // increasing it simply does not work!! even if we bind it !!
        // this.state.count = this.state.count+1; 
        // never update state vars directly!!!
        this.setState({
            count:this.state.count+1
        });
        // in class componenets we will have to use setState method to update state variables

    }

    componentDidMount(){
        console.log("component did mount got called third!")
        // mostly component did mount is used to make API calls once the component is atached to dom 
    }

    // always need to use this. 
    render(){
        console.log("render got called second!!")
        const {name,location} = this.props;
        const {count, count2} = this.state;
        return (
        <div className="user-card">
            <h1>Count : {count}</h1>
            <button onClick={this.increaseCnt.bind(this)}> count + 1 </button>
                <p>{count2}</p>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>hajimalungbaba.786@gmail.com</h4>
        </div>);
    }
}

export default UserClass;