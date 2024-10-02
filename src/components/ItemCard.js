const ItemCard = ({itemInfo})=>{

    return (
    <div className="item-card">

      <h3>{itemInfo.name}</h3>
      <h6>{ itemInfo.itemAttribute.vegClassifier }</h6>
      <p>Rs. { itemInfo.price / 100 }/-</p>
      
    </div>);
}

export default ItemCard