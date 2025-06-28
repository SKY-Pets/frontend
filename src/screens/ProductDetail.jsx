import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../api/api";
import {
  Container,
  Typography,
  Button,
  Box,
  TextField,
  IconButton,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { Carousel } from "react-responsive-carousel";
import PaymentModal from "../components/PaymentModal/PaymentModal";
import AppContext from "../context/AppContext"; // Importa tu AppContext
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CartModal from "../components/CartModal/CartModal";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false); // Estado para el modal del carrito
  // Acceder a la función addToCart desde el contexto
  const { addToCart, updateQuantity } = useContext(AppContext);

  useEffect(() => {
    // Llama al nuevo método getProductById para obtener el producto
    getProductById(id)
      .then((data) => {
        setProduct(data);
      window.scrollTo(0, 0); // Scroll to top when the component is mounted or the product is changed
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [id]);

  const handleAddToCart = () => {
    if (product && quantity > 0) {
      addToCart({ ...product, quantity }); // Agrega el producto al carrito con la cantidad seleccionada
      updateQuantity(product.id, quantity);
      setOpenModal(true);
    }
  };

  if (!product) {
    return <Typography>Cargando...</Typography>;
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={4}>
        <Box flex={1}>
          <Carousel showThumbs={false}>
            
            {product.images ? product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={product.name}
                style={{ maxWidth: "100%", borderRadius: 8 }}
              />
            )) : (
              <img
                key={1}
                src={'/logo-arg.png'}
                alt={product.name}
                style={{ maxWidth: "100%", borderRadius: 8 }}
              />
            )}
          </Carousel>
        </Box>

        <Box flex={2}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {product.name.toUpperCase()}
          </Typography>
          <Typography variant="h5" color="success" fontWeight="bold">
            ${product.price.toLocaleString()}
          </Typography>
          <Typography
            variant="body1"
            fontWeight="bold"
            sx={{ cursor: "pointer" }}
            mt={2}
            onClick={() => setPaymentModalOpen(true)}
          >
            Ver métodos de pago
          </Typography>
          {paymentModalOpen && (
            <PaymentModal
              isOpen={paymentModalOpen}
              onClose={() => setPaymentModalOpen(false)}
              priceEfectivo={product.price}
              priceTransferencia={product.price}
            />
          )}
          <Typography variant="body1" mt={2}>
            {product.stock ? "En stock" : "Sin stock"}
          </Typography>
          <Typography variant="body2" mt={2}>
            {product.details}
          </Typography>
          <Typography variant="body2" mt={1}>
            <strong>Presentación:</strong> {product.presentation}
          </Typography>
          <Typography variant="body2" mt={1}>
            <strong>Instrucciones de uso:</strong> {product.instructions}
          </Typography>
          <Box mt={2} display="flex" alignItems="center" gap={1}>
            <Typography variant="body1" fontWeight="bold">
              Cantidad:
            </Typography>
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
              sx={{
                width: 60,
                textAlign: "center",
                textAlignLast: "center",
              }}
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
          <Button
            variant="contained"
            color="success"
            fullWidth
            sx={{ mt: 3 }}
            onClick={handleAddToCart}
            disabled={!product.stock} // Desactiva el botón si no hay stock
          >
            Agregar al carrito
          </Button>
          {/* Modal del carrito */}
          <CartModal open={openModal} handleClose={() => setOpenModal(false)} />
        </Box>
      </Box>
    </Container>
  );
};

export default ProductDetail;
