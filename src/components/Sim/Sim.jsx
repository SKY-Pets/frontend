import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "./cart.json";

const Sim = ({ isFail }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.paper"
      }}
    >
      <Player
        autoplay
        loop
        src={animationData}
        style={{ height: "50vh", width: "50vh" }}
      />
      <Typography
        variant="h6"
        sx={{ mt: 2, color: isFail ? "error.main" : "text.primary" }}
      >
        {isFail
          ? "Ocurrió un error, intente de nuevo"
          : "El carrito está vacio"}
        
      </Typography>

      <Typography variant="h6" sx={{ mt: 2 }}>
        Explore nuestros productos para agregarlos al carrito
      </Typography>
      <Button variant="contained" sx={{ mt: 2 }} href="/products">
        Explorar
      </Button>
    </Box>
  );
};

export default Sim;
