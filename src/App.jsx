import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./screens/Home";
import Contact from "./screens/Contact";
import Product from "./screens/ProductDetail";
import Checkout from "./screens/Checkout";

function App() {
  const isLoggedIn = localStorage.getItem("uid");

  
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/products"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <Contact />
          </Layout>
        }
      />
      <Route
        path="/products/:id"
        element={
          <Layout>
            <Product />
          </Layout>
        }
      />
      <Route
        path="/checkout"
        element={
          <Layout>
            <Checkout />
          </Layout>
        }
      />
    </Routes>
    
  );
}

export default App;
