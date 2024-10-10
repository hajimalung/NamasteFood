import { useState } from "react";

const User = ({name})=>{

    const [count] = useState(0);

    return (
    <div className="user-card">
        <h1>Count : {count}</h1>
        <h2>Name is {name}</h2>
        <h3>NGKL</h3>
        <h4>hajimalungbaba.786@gmail.com</h4>
    </div>);
}

export default User;