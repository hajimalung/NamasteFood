// lets show team members data in about us page and use class based components
import User from "./User";
import UserClass from "./UserClass";

const AboutUs = ()=>{
    return (<div>
    About us rendered!!
    <h1>This is Food ordering app!!</h1>
    <UserClass name={"baba (classic)"} location={"NGKL classic"}/>
    </div>);
}
export default AboutUs;