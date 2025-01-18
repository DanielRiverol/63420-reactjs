import { useEffect, useState } from "react";
import { useParams, Link, NavLink } from "react-router-dom";
const productsList = [
  {
    id: 1,
    category: 1,
    name: "Smartphone último modelo",
    description: "El smartphone más avanzado del mercado.",
  },
  {
    id: 2,
    category: 3,
    name: "Televisión 4K Smart TV",
    description: "Disfruta de una experiencia visual inmersiva.",
  },
  {
    id: 3,
    category: 2,
    name: "Portátil gaming de alta gama",
    description: "Potencia máxima para tus juegos favoritos.",
  },
  {
    id: 4,
    category: 2,
    name: "Tablet con teclado desmontable",
    description: "Versatilidad para trabajar y jugar.",
  },
  {
    id: 5,
    category: 1,
    name: "Auriculares inalámbricos con cancelación de ruido",
    description: "Sumérgete en tu música favorita.",
  },
  {
    id: 6,
    category: 4,
    name: "Cámara réflex digital profesional",
    description: "Captura momentos inolvidables con calidad excepcional.",
  },
  {
    id: 7,
    category: 3,
    name: "Barra de sonido para cine en casa",
    description: "Sonido envolvente para una experiencia cinematográfica.",
  },
  {
    id: 8,
    category: 2,
    name: "Smartwatch con monitor de actividad física",
    description: "Controla tu salud y estado físico.",
  },
  {
    id: 9,
    category: 1,
    name: "Consola de videojuegos de última generación",
    description: "Disfruta de los últimos lanzamientos.",
  },
  {
    id: 10,
    category: 4,
    name: "Drone con cámara 4K para grabar desde el aire",
    description: "Captura imágenes aéreas impresionantes.",
  },
];
function Category() {
  const { categoryId } = useParams();
  //   console.log(typeof categoryId);

  const [products, setProduct] = useState([]);
  const [catId, setCatId] = useState(categoryId);
  //   console.log(typeof catId);

  useEffect(() => {
    // setProduct(productsList);
    const filterProducts = productsList.filter(
      (prod) => prod.category === Number(catId) //parseInt(catId) || +catId
    );
    setProduct(filterProducts);
  }, [categoryId]);

  return (
    <div>
      <h2>Category {catId}</h2>
      <ul className='container'>
        {products.map((product) => (
          <li key={product.id}>
            <div className='card'>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          </li>
        ))}
      </ul>
      <NavLink to={"/categories"}>Volver las categorias</NavLink>
    </div>
  );
}

export default Category;
