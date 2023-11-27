import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom/dist";
import { hover } from "@testing-library/user-event/dist/hover";

function Menu() {
  const [ListSP, setListCategory] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/api/list-category")
      .then(function (response) {
        // handle success
        setListCategory(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  console.log(ListSP)
  return (
    <>
      <ul  style={{backgroundColor:"Grey", padding: "10px"}}>
        {ListSP.map((iddanhmuc, index) => {
          return (
            <>
              <div style={{ display: "inline-block" }}>
                <ul key={index} >
                  <li style={{ listStyle: "none", padding: "5px"}}><Link to={`${iddanhmuc.iddanhmuc}`} style={{ textDecoration: "none", color: "black", textTransform: "uppercase" }}>{iddanhmuc.tendanhmuc}</Link></li>
                </ul>
              </div>
            </>

          )
        }
        )}
      </ul>
      <Outlet />
    </>

  );
}

export default Menu;

