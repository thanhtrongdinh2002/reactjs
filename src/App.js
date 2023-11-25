import React from "react";
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
    path: "/insert-new-user",
    component: NewUser,
  },
  {
    path: "/insert-product",
    component: NewProduct,
  },
  {
    path: "/insert-category",
    component: NewCategory,
  },
];
export default function App() {
  return (
    <Router>
      <Routes>
        {ListRouter.map((router, index) => {
          const Page = router.component;
          return (
            <Route
              key={index}
              path={router.path}
              element={
                <DefautLayout>
                  <Page />
                </DefautLayout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}
