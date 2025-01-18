import { Link } from "react-router-dom";
const categoriesList = [
  { id: 1, name: "Electronics" },
  { id: 2, name: "Computers" },
  { id: 3, name: "Smart TVs" },
  { id: 4, name: "Cameras" },
];
function Categories() {
  return (
    <>
      <h1>Categories</h1>
      <ul>
        {categoriesList.map((cat) => (
          <li key={cat.id}>
            <Link to={`/categories/${cat.id}`}>
            {cat.name}
            </Link>
            </li>
        ))}
      </ul>
    </>
  );
}

export default Categories;
