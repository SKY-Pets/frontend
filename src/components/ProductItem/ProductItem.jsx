import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Chip,
  Box,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ product }) => {
  const isWeb = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const hasDiscount = product.discountPrice && product.discountPrice < product.price;
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(`/products/${product.id}`)}
      sx={{
        backgroundColor: "white",
        fontFamily: "Lato",
        minWidth: isWeb ? "270px" : "100%",
        height: "100%",
        borderRadius: 2,
        boxShadow: 2,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        paddingLeft: 2,
        cursor: "pointer",
      }}
    >
      {/* Imagen del producto */}
      <Box sx={{ position: "relative", height: 200 }}>
        <CardMedia
          component="img"
          image={product.images? product.images[0] : "/logo-arg.png"}
          alt={product.name}
          sx={{ objectFit: "contain", width: "100%", height: "100%" }}
        />

        {/* Etiqueta de "Sin Stock" */}
        {!product.stock && (
          <Chip
            label="SIN STOCK"
            color="error"
            sx={{
              top: 20,
              position: "absolute",
              fontWeight: "bold",
            }}
          />
        )}
      </Box>

      {/* Contenido */}
      <CardContent sx={{ textAlign: "left", flexGrow: 1 }}>
        <Typography fontSize={14} fontWeight={700} fontFamily="Lato">
          {product.name.toUpperCase()}
        </Typography>

        {/* Precios */}
        <Box display="flex" alignItems="center" gap={1}>
          <Typography fontSize={15} color="text.primary" fontWeight={700} fontFamily="Lato">
            ${product.discountPrice ? product.discountPrice.toLocaleString() : product.price.toLocaleString()}
          </Typography>
          {hasDiscount && (
            <Typography fontSize={14} color="gray" sx={{ textDecoration: "line-through" }}>
              ${product.price.toLocaleString()}
            </Typography>
          )}
        </Box>

        <Typography fontSize={12} fontWeight={600} fontFamily="Lato" color="gray">
          {product.details}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductItem;
