import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
const ItemListContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const pr = {
    id: 1,
    name: "Zapatillas nike",
    pictureUrl:
      "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw017a3a6b/products/NIDX3705-102/NIDX3705-102-6.JPG",

    price: 45000,
  };
  useEffect(() => {
    // simulacion de retardo
    setTimeout(() => {
      setProduct(pr);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? <div>Not product</div> : <ItemDetail product={product} />}
    </div>
  );
};

export default ItemListContainer;
