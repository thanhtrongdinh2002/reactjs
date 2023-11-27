import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <ul className="header-admin">
        <li className="">
          <Link className="" to="/">
            LIST USER
          </Link>
        </li>
        <li className="">
          <Link className=""  to="/list-product">
            LIST PRODUCT
          </Link>
        </li>
        <li className="">
          <Link className=""  to="/list-category">
            LIST CATEGORY
          </Link>
        </li>
        <li className="">
          <Link className="" to="/create-user">
            ADD NEW USER
          </Link>
        </li>
        <li className="">
          <Link className=""  to="/create-product">
            ADD NEW PRODUCT
          </Link>
        </li>
        <li className="">
          <Link className="" to="/insert-category">
            ADD NEW CATEGORY
          </Link>
        </li>
        <li className="">
          <Link className=""  to="/logout">
            LOGOUT
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
