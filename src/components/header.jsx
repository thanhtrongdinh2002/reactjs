import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <ul class="header-admin">
        <li class="">
          <Link class="" to="/list-user">
            LIST USER
          </Link>
        </li>
        <li class="">
          <Link class=""  to="/list-product">
            LIST PRODUCT
          </Link>
        </li>
        <li class="">
          <Link class=""  to="/list-category">
            LIST CATEGORY
          </Link>
        </li>
        <li class="">
          <Link class="" to="/insert-new-user">
            ADD NEW USER
          </Link>
        </li>
        <li class="">
          <Link class=""  to="/insert-product">
            ADD NEW PRODUCT
          </Link>
        </li>
        <li class="">
          <Link class="" to="/insert-category">
            ADD NEW CATEGORY
          </Link>
        </li>
        <li class="">
          <Link class=""  to="/logout">
            LOGOUT
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
