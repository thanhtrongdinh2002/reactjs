import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefautLayout from "./layouts/DefautLayout";
import ListUser from "./pages/list-user";
import ListProduct from "./pages/list-product";
import ListCategory from "./pages/list-catagory";
import NewUser from "./pages/new-user";
import NewProduct from "./pages/new-product";
import NewCategory from "./pages/new-category";
import DetailCategory from "./pages/detail-category";
import DetailUser from "./pages/detail-user";
import DetailProduct from "./pages/detail-product";
import EditProduct from "./pages/edit-product";
import EditCategory from "./pages/edit-category";
import EditUser from "./pages/edit-user";
import Home from "./pages/home";
import Menu from "./pages/home";
import Product from "./pages/product";

const ListRouter = [
  {
    path: "/",
    component: ListUser,
  },
  {
    path: "/list-product",
    component: ListProduct,
  },
  {
    path: "/list-category",
    component: ListCategory,
  },
  {
    path: "/create-user",
    component: NewUser,
  },
  {
    path: "/create-product",
    component: NewProduct,
  },
  {
    path: "/insert-category",
    component: NewCategory,
  },
  {
    path: "/home",
    component: Menu,
    layout: null,
  },
  {
    path: "/product",
    component: Product,
    layout: null,
  },

];
export default function App() {
  return (
    <Router>
      <Routes>
        {ListRouter.map((router, index) => {
          const Page = router.component;
          let Layout = DefautLayout;
          if (router.layout === null) {
            Layout = Fragment;
          }
          return (
            <>
              <Route
                key={index}
                path={router.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>

                }
              />
              
            </>
          );
        })}
        <Route path="/product" element={<Product />}>
                <Route
                  path=""
                  element={<Product />}
                />
              </Route>
              <Route path="/home" element={<Menu />}>
                <Route
                  path=":id"
                  element={<Product />}
                />
              </Route>
      </Routes>
    </Router>
  );
}
