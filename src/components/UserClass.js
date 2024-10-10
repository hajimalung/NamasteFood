
// a js class that extends React.Copmonent becomes a class based component
import React from "react";

// constructor will receive the props, we need to call super with props
class UserClass extends React.Component{

    constructor(props){
        super(props); // dont forget this - why is homework?
        console.log(props);
        // this is the best place to create state variables
        this.state ={
            count : 0,
        }   // this is reserved in react class components
    }

    increaseCnt(){
        console.log("inc..");
        // increasing it simply does not work!! even if we bind it !!
        // this.state.count = this.state.count+1; 
        // never update state vars directly!!!
        this.setState({
            ...this.state,
            count:this.state.count+1
        });
        // in class componenets we will have to use setState method to update state variables

    }

    // always need to use this. 
    render(){
        const {name,location} = this.props;
        const {count, anotherCount} = this.state;
        return (
        <div className="user-card">
            <h1>Count : {count}</h1>
            <button onClick={this.increaseCnt.bind(this)}></button>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>hajimalungbaba.786@gmail.com</h4>
        </div>);
    }
}

export default UserClass;