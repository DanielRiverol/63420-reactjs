import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import productsList from "../mock/products.mock";
import ItemCount from "./ItemCount";
function ItemDetail() {
  const { id } = useParams();
  console.log(id);

  const [product, setProduct] = useState({});
  useEffect(() => {
    const findProduct = productsList.find(
      (product) => product.id === parseInt(id)
    );
    setProduct(findProduct);
  }, [id]);

  const [cant, setCant] = useState(1);
  const handleIncrement = () => {
    cant < product.stock && setCant(cant + 1);
  };
  const handleDecrement = () => {
    cant > 1 && setCant(cant - 1);
  };

  return (
    <div>
      <h2>Detalle del producto</h2>
      <hr />
      <div className='card'>
        <img src={product.image} alt='' />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <p>{product.stock}</p>
        {/* <ItemCount product={product}/> */}
        <ItemCount
          cant={cant}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
        />
      </div>
    </div>
  );
}

export default ItemDetail;
