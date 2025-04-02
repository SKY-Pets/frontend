import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../api/api";
import { Container, Typography, Button, Box, TextField, IconButton } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    getProducts().then((data) => {
      const foundProduct = data.find((p) => p.id === parseInt(id));
      setProduct(foundProduct);
    });
  }, [id]);

  if (!product) {
    return <Typography>Cargando...</Typography>;
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={4}>
        <Box flex={1}>
          <Carousel showThumbs={false}>
            {product.images.map((img, index) => (
              <img key={index} src={img} alt={product.name} style={{ maxWidth: "100%", borderRadius: 8 }} />
            ))}
          </Carousel>
        </Box>
        <Box flex={2}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {product.name.toUpperCase()}
          </Typography>
          <Typography variant="h5" color="primary" fontWeight="bold">
            ${product.price.toLocaleString()}
          </Typography>
          <Typography variant="body1" mt={2}>
            {product.stock ? "En stock" : "Sin stock"}
          </Typography>
          <Typography variant="body2" mt={2}>{product.details}</Typography>
          <Typography variant="body2" mt={1}><strong>Presentación:</strong> {product.presentation}</Typography>
          <Typography variant="body2" mt={1}><strong>Instrucciones de uso:</strong> {product.instructions}</Typography>
          <Box mt={2} display="flex" alignItems="center" gap={1}>
            <IconButton 
              color="black" 
              onClick={() => setQuantity(Math.max(1, quantity - 1))} 
              sx={{ borderRadius: 2, minWidth: 40 }}
            >
              <Remove />
            </IconButton>
            <TextField 
              size="small" 
              value={quantity} 
              sx={{ width: 60, textAlign: "center", textAlignLast: "center" }} 
              inputProps={{ readOnly: true }}
            />
            <IconButton 
              color="black" 
              onClick={() => setQuantity(quantity + 1)} 
              sx={{ borderRadius: 2, minWidth: 40 }}
            >
              <Add />
            </IconButton>
          </Box>
          <Button variant="contained" color="success" fullWidth sx={{ mt: 3 }}>
            Agregar al carrito
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductDetail;
