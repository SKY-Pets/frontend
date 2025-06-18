import { useEffect, useState } from "react";
import { Container, Typography, Divider, Box } from "@mui/material";
import { getProducts } from "../api/api";
import ProductList from "../components/ProductList/ProductList";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          gap: 4,
          flexDirection: { xs: "column", md: "row" }, // Apila en móviles
        }}
      >
        {/* Sección Izquierda */}
        <Box sx={{ flex: 1, minWidth: "200px" }}>
          <Typography
            variant="h3"
            color="text"
            fontWeight="bold"
            sx={{
              whiteSpace: { xs: "nowrap", md: "normal" },
              fontSize: { xs: "1.8rem", md: "3rem" }, // Ajusta tamaño en móviles
            }}
          >
            HOLA! 
          </Typography>
          <Divider
            sx={{ backgroundColor: "black", height: 6, width: "30%", my: 2 }}
          />
          <Typography variant="body1" color="textSecondary" mb={4}>
            Explora nuestra tienda y descubre los mejores productos 
            para tu compa 🦦
          </Typography>

          {/* Leyenda 1 */}
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ mt: 2 }}
          >
            Todos nuestros productos son aptos para perros y gatos. 
            Sin embargo, recomendamos consultar con su veterinario 
            antes de su consumo.
          </Typography>

          {/* Leyenda 2 */}
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ mt: 1 }}
          >
            Los productos congelados se entregan congelados. 
            ¡No olvides traer tu conservadora si no estarás en casa! 😉
          </Typography>
        </Box>

        {/* Sección Derecha */}
        <Box sx={{ flex: 2, minWidth: { xs: "100%", md: "400px" } }}>
          <ProductList products={products} />
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
