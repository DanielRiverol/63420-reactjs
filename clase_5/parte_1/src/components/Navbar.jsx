import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/categories"}>Categories</Link>
          {/* <a href=''>Categories</a> */}
        </li>
        <li>
          <a href='/'>Home con etiqueta <code>a</code></a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
