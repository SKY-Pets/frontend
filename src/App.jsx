import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./screens/Home";
import Product from "./screens/ProductDetail";

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
        path="/products/:id"
        element={
          <Layout>
            <Product />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
