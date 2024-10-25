const ItemCard = ({itemInfo})=>{
    const imagebaseURL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";
    console.log(itemInfo);
    // https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/3fb26cb13664e34412
    return (
    <div className="item-card p-4 m-4 border border-solid rounded-md hover:bg-gray-100">
      <img className="border rounded-md" src={imagebaseURL+itemInfo.imageId} />
      <h3 className="font-bold mt-2">{itemInfo.name}</h3>
      <h6>{ itemInfo.itemAttribute.vegClassifier }</h6>
      <div><label>Rs. { itemInfo.price / 100 }/-</label><button className="m-4 px-4 border border-red-800 rounded-lg hover:px-5 py-1 hover:bg-green-200">Add</button></div>
      
    </div>);
}

export default ItemCard