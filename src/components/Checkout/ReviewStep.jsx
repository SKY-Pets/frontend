import React from "react";
import { Box, Typography } from "@mui/material";

const ReviewStep = ({ formData }) => {
  return (
    <Box>
      <Typography variant="h6" mt={2} >Revisión</Typography>
      <Typography><strong>Email:</strong> {formData.envio.email}</Typography>
      <Typography><strong>Nombre:</strong> {formData.envio.nombre}</Typography>
      <Typography><strong>Apellido:</strong> {formData.envio.apellido}</Typography>
      <Typography><strong>Método de Envío:</strong> {formData.envio.metodoEnvio}</Typography>
      <Typography><strong>Método de Pago:</strong> {formData.pago.metodo}</Typography>
    </Box>
  );
};

export default ReviewStep;
