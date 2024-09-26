import { swiggyResponse } from "./mockdata/restaurants";
export function fetchSwiggyData(){

    return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(swiggyResponse);
            },1000)
    })
}