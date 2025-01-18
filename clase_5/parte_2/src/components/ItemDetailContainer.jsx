import { useEffect, useState } from "react";
import productList from "../mock/products.mock";
import Item from "../components/Item";
import ButtonCustom from "./Custom/ButtonCustom";
import InputCustom from "./Custom/InputCustom";
function ItemDetailContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productList);
  }, []);
  return (
    <div>
      <ButtonCustom className={""} type={"submit"}>
        Submit
      </ButtonCustom>
      <ButtonCustom className={""} type={"reset"}>
        Resetr
      </ButtonCustom>

      <form action=''>
        <InputCustom value={"hola"} placeholder={"nombre"} />
        <InputCustom type={'password'} placeholder={"pasword"} />
        <InputCustom type={'date'} />
      </form>
      <h1>Lista de productos</h1>
      <hr />
      <div style={styles.container}>
        {products.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ItemDetailContainer;

// const boton = document.queryselector("button")[0].addEvventLister('click',funcion)
const styles = {
  container: {
    width: "100%",
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
  },
};
