import { REST_DETALS_API, REST_LISTING_API } from "./constants";

export async function fetchSwiggyData(){

    // return new Promise((resolve, reject)=>{
    //         setTimeout(()=>{
    //             resolve(swiggyResponse);
    //         },1000)
    // })
    const myHeaders = new Headers();
    myHeaders.append("__fetch_req__", "true");
    myHeaders.append("accept", "*/*");
    myHeaders.append("accept-language", "en-GB,en-US;q=0.9,en;q=0.8");
    myHeaders.append("content-type", "application/json");
    myHeaders.append("cookie", "deviceId=s%3A074b5c53-3422-468c-88ef-6c528f893b56.KazMcnMZcBUu%2FG%2Fy7bdhAN1ngcANI8TFCOaEoaIMRpY; versionCode=1200; platform=web; subplatform=dweb; statusBarHeight=0; bottomOffset=0; genieTrackOn=false; isNative=false; openIMHP=false; lat=s%3A17.3724.5jeAjrZvgFfSj%2BWL%2F7VNDUbG%2Fr%2By3Y03%2BvrTfTOSfUc; lng=s%3A78.4378.57kkF7fKm1hmRvVXfx9eQzw0bhFTtibiC5AcMx%2FP4qI; webBottomBarHeight=0; _gcl_au=1.1.807413435.1725886286; _fbp=fb.1.1725886287182.971066150976299135; __SW=06uUdX3r1ZwjDZ4JUZjBd3ZzlE1t5heg; _device_id=96a519ef-4836-881a-ee36-9640e3e3197b; fontsLoaded=1; _session_tid=616655cc8158aafd437675c4904f7b0cd9da86ad840135fc3749eb3cd0f79fad774155af4fe19ac7d32327cdef15686d9d84353d4042576b99053a06ac3c839be11ef55315bc9ffa315204e459f4023c9098be0ed6555323772479e0c243fb59cddc922cd61528dacf91e0798e4c4011; tid=s%3A9b04e1f1-5f2d-4279-9fcf-a5bcbb3dec3d.uznIuzSB0%2BA%2Fz86vs%2FI1TNgWjsWw5Z3fuZxSc8I8y0I; address=s%3A.4Wx2Am9WLolnmzVcU32g6YaFDw0QbIBFRj2nkO7P25s; addressId=s%3A.4Wx2Am9WLolnmzVcU32g6YaFDw0QbIBFRj2nkO7P25s; _ga_8N8XRG907L=GS1.1.1725886287.1.1.1725887071.0.0.0; adl=true; _is_logged_in=1; _sid=geebbe26-4ccc-4f13-922b-92773e6dbb3e; _gid=GA1.2.756842983.1727687026; _gat_0=1; _ga_34JYJ0BCRN=GS1.1.1727687026.9.0.1727687043.0.0.0; userLocation={%22lat%22:%2217.4434345%22%2C%22lng%22:%2278.3745776%22%2C%22address%22:%22Phase%202%2C%20HITEC%20City%2C%20Hyderabad%2C%20Telangana%20500081%2C%20India%22%2C%22area%22:%22%22%2C%22showUserDefaultAddressHint%22:false}; _ga=GA1.2.79792606.1725886287; _device_id=96a519ef-4836-881a-ee36-9640e3e3197b; _is_logged_in=1");
    myHeaders.append("if-none-match", "W/\"2a8e4-v+VfD5QKI+cEdoTpXQW7NvLAwFk\"");
    myHeaders.append("priority", "u=1, i");
    myHeaders.append("referer", "https://www.swiggy.com/");
    myHeaders.append("sec-ch-ua", "\"Google Chrome\";v=\"129\", \"Not=A?Brand\";v=\"8\", \"Chromium\";v=\"129\"");
    myHeaders.append("sec-ch-ua-mobile", "?0");
    myHeaders.append("sec-ch-ua-platform", "\"macOS\"");
    myHeaders.append("sec-fetch-dest", "empty");
    myHeaders.append("sec-fetch-mode", "cors");
    myHeaders.append("sec-fetch-site", "same-origin");
    myHeaders.append("user-agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36");

    const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
    };

   const fetchedResp = await fetch( REST_LISTING_API, requestOptions);
   return fetchedResp.json();
    // .then((response) => response.text())
    // .then((result) => console.log(result))
    // .catch((error) => console.error(error));
}

export async function fetchRestaurantDetails(resId){

    const myHeaders = new Headers();

    myHeaders.append("__fetch_req__", "true");
    myHeaders.append("accept", "*/*");
    myHeaders.append("accept-language", "en-GB,en-US;q=0.9,en;q=0.8");
    myHeaders.append("content-type", "application/json");
    myHeaders.append("cookie", "deviceId=s%3A074b5c53-3422-468c-88ef-6c528f893b56.KazMcnMZcBUu%2FG%2Fy7bdhAN1ngcANI8TFCOaEoaIMRpY; versionCode=1200; platform=web; subplatform=dweb; statusBarHeight=0; bottomOffset=0; genieTrackOn=false; isNative=false; openIMHP=false; lat=s%3A17.3724.5jeAjrZvgFfSj%2BWL%2F7VNDUbG%2Fr%2By3Y03%2BvrTfTOSfUc; lng=s%3A78.4378.57kkF7fKm1hmRvVXfx9eQzw0bhFTtibiC5AcMx%2FP4qI; webBottomBarHeight=0; _gcl_au=1.1.807413435.1725886286; _fbp=fb.1.1725886287182.971066150976299135; __SW=06uUdX3r1ZwjDZ4JUZjBd3ZzlE1t5heg; _device_id=96a519ef-4836-881a-ee36-9640e3e3197b; fontsLoaded=1; _session_tid=616655cc8158aafd437675c4904f7b0cd9da86ad840135fc3749eb3cd0f79fad774155af4fe19ac7d32327cdef15686d9d84353d4042576b99053a06ac3c839be11ef55315bc9ffa315204e459f4023c9098be0ed6555323772479e0c243fb59cddc922cd61528dacf91e0798e4c4011; tid=s%3A9b04e1f1-5f2d-4279-9fcf-a5bcbb3dec3d.uznIuzSB0%2BA%2Fz86vs%2FI1TNgWjsWw5Z3fuZxSc8I8y0I; address=s%3A.4Wx2Am9WLolnmzVcU32g6YaFDw0QbIBFRj2nkO7P25s; addressId=s%3A.4Wx2Am9WLolnmzVcU32g6YaFDw0QbIBFRj2nkO7P25s; _ga_8N8XRG907L=GS1.1.1725886287.1.1.1725887071.0.0.0; adl=true; _is_logged_in=1; _sid=gfkab933-779f-494d-af32-2ab5979e5ddc; userLocation={%22lat%22:%2217.503629470788848%22%2C%22lng%22:%2278.41291170567274%22%2C%22address%22:%222nd%20Phase%2C%20Allwyn%20Colony%2C%20Kukatpally%2C%20Hyderabad%2C%20Telangana%20500072%2C%20India%22%2C%22area%22:%22%22%2C%22showUserDefaultAddressHint%22:false}; _gid=GA1.2.1484052065.1727839097; _gat_0=1; _ga_34JYJ0BCRN=GS1.1.1727839096.10.0.1727839096.0.0.0; _ga=GA1.2.79792606.1725886287; _device_id=96a519ef-4836-881a-ee36-9640e3e3197b; _is_logged_in=1; _sid=gfkab933-779f-494d-af32-2ab5979e5ddc");
    myHeaders.append("priority", "u=1, i");
    myHeaders.append("referer", "https://www.swiggy.com/city/hyderabad/eruvaka-tiffins-vivekanandanagar-colony-kukatpally-rest577888");
    myHeaders.append("sec-ch-ua", "\"Google Chrome\";v=\"129\", \"Not=A?Brand\";v=\"8\", \"Chromium\";v=\"129\"");
    myHeaders.append("sec-ch-ua-mobile", "?0");
    myHeaders.append("sec-ch-ua-platform", "\"macOS\"");
    myHeaders.append("sec-fetch-dest", "empty");
    myHeaders.append("sec-fetch-mode", "cors");
    myHeaders.append("sec-fetch-site", "same-origin");
    myHeaders.append("user-agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36");

    const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
    };

    const resp = await fetch(REST_DETALS_API.replace('{$resId}',resId), requestOptions)
    return resp.json();
    // .then((response) => response.text())
    // .then((result) => console.log(result))
    // .catch((error) => console.error(error));

}

export function getResInfoFromCards(cardArray){
    const keys = ['id','logo','name','locality','costForTwoMessage','avgRating','backgroundImage','cloudinaryImageId','cuisines','sla','totalRatingsString'];

    const resInfo = {};

    keys.reduce((result,key)=>{
        if(cardArray[2].card.card.info.hasOwnProperty(key)){
            result[key] = cardArray[2].card.card.info[key];
        }
        return result;
    },resInfo);

    

    const menuitemCards =  cardArray[4].groupedCard.cardGroupMap.REGULAR.cards.filter(item => item.card.card.itemCards).reduce((result,item)=>{ 
        result = result.concat(item.card.card.itemCards);
            return result;
        },[]);

    resInfo["menuItemCards"] = menuitemCards;

    return resInfo;
}