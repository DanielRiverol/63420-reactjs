import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/categories"}>Categories</NavLink>
          {/* <a href=''>Categories</a> */}
        </li>
        <li>
          <a href='/'>
            Home con etiqueta <code>a</code>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
