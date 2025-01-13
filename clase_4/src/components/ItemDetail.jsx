const ItemDetail = ({ product }) => {
  return (
    <div className='card'>
      <img src={product.pictureUrl} alt='' />
      <div>
        <h2>{product.name}</h2>
        <p>${product.price}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
// props => props.product.name
