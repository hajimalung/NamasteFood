import { useState } from "react"

const useOnlineStatus = ()=>{
    const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);
    
    navigator.connection.onchange =()=>{ 
        setOnlineStatus(navigator.onLine);
    }

    return onlineStatus;
}

export default useOnlineStatus;