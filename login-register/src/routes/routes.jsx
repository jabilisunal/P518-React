import React from "react";
import { Route, Routes } from "react-router-dom";
import SiteLayout from "../layout/site/SiteLayout";
import Home from "../pages/site/Home";
import About from "../pages/site/About";
import Products from "../pages/site/Products";
import AdminLayout from "../layout/admin/AdminLayout";
import EditProduct from "../pages/admin/EditProduct";
import Dashboard from "../pages/admin/Dashobard";
import AddProduct from "../pages/admin/AddProduct";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "../components/site/protectedRoute";
import Contact from "../pages/site/Contanct";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Site Routes*/}
      <Route path="/" element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="products"
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          }
        />
        <Route path="contact" element={<Contact/>}/>
      </Route>
      {/* Admin Routes  */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="editProduct" element={<EditProduct />} />
        <Route path="addProduct" element={<AddProduct />} />
      </Route>

      {/* Auth Routes */}
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;
