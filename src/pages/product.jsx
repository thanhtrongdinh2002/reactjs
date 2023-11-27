import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom/dist";

function Product() {
  const [ListProduct, setListProduct] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/api/list-sanpham")
      .then(function (response) {
        // handle success
        setListProduct(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  console.log(ListProduct)
  return (
    <>
      <ul>
        {ListProduct.map((idsp, index) => {
          return (
            <ul key={index} style={{display:"inline-block"}}>
              <li style={{listStyle:"none", height: "200px", width: "200px", }}><Link style={{textDecoration:"none", color:"black"}}>
                < >{idsp.tensp}</><br/>
                < >{idsp.giasp}</><br/>
                < >{idsp.chitietsp}</><br/>
                </Link></li>
            </ul>
          )
        }
        )}
      </ul>
    </>

  );
}

export default Product;

