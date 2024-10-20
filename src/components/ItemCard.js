const ItemCard = ({itemInfo})=>{

    return (
    <div className="item-card p-4 m-4 border border-solid rounded-md hover:bg-gray-400">

      <h3 className="font-bold">{itemInfo.name}</h3>
      <h6>{ itemInfo.itemAttribute.vegClassifier }</h6>
      <p>Rs. { itemInfo.price / 100 }/-</p>
      
    </div>);
}

export default ItemCard