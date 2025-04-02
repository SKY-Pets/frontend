import { Card, CardMedia, CardContent, Typography, Button, Chip, Box, useMediaQuery } from "@mui/material";

const ProductItem = ({ product }) => {
  const isWeb = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const hasDiscount = product.discountPrice && product.discountPrice < product.price;

  return (
    <Card
      sx={{
        backgroundColor: "white",
        fontFamily: "Lato",
        minWidth: isWeb ? "270px" : "100%",
        height: "100%", // Mantiene la altura uniforme
        borderRadius: 2,
        boxShadow: 2,
        position: "relative",
        display: "flex",
        flexDirection: "column", // Asegura una estructura estable
        paddingLeft: 2,
      }}
    >
      {/* Imagen del producto */}
      <Box sx={{ position: "relative", height: 200 }}>
        <CardMedia
          component="img"
          image={product.image}
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

        {/* Botón "Ver más" con subrayado */}
        <Button
          color="secondary"
          sx={{
            fontSize: 14,
            fontWeight: "bold",
            fontFamily: "Lato",
            textTransform: "none",
            borderBottom: "2px solid #D35D5D",
            borderRadius: 0,
            mt: 1,
          }}
        >
          Ver más
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductItem;
