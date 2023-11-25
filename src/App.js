import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefautLayout from "./layouts/DefautLayout";
import ListUser from "./pages/list-user";
import ListProduct from "./pages/list-product";
import ListCategory from "./pages/list-catagory";

const ListRouter = [
  {
    path: "/list-user",
    component: ListUser,
  },
  {
    path: "/list-product",
    component: ListProduct,
  },
  {
    path: "/list-category",
    component: ListCategory,
  }
];
export default function App() {
  return (
    <Router>
      <Routes>
        {ListRouter.map((router, index) => {
         const Page = router.component
          return (
            <Route
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
