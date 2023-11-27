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
              <li style={{listStyle:"none", padding:"5px", margin: "2px", backgroundColor: "grey", height: "100px", width: "100px"}}><Link style={{textDecoration:"none", color:"black"}}>
                <li style={{paddingTop: "15px", paddingLeft: "10px"}}>{idsp.tensp}</li>
                <li style={{paddingLeft: "10px"}}>{idsp.giasp}</li>
                <li style={{paddingLeft: "10px"}}>{idsp.chitietsp}</li>
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

