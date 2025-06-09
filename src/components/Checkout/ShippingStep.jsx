import React from "react";
import { Box, Typography, TextField, RadioGroup, FormControlLabel, Radio } from "@mui/material";

const ShippingStep = ({ formData, handleInputChange, errors }) => {
  return (
    <Box>
      <Typography variant="h6" mt={2}>
        Contacto
      </Typography>
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        value={formData.envio.email}
        onChange={(e) => handleInputChange("envio", "email", e.target.value)}
        error={!!errors.email}
        helperText={errors.email}
      />
      <Typography variant="h6" sx={{ mt: 2 }}>
        Datos del comprador
      </Typography>
      <TextField
        label="Nombre"
        fullWidth
        margin="normal"
        value={formData.envio.nombre}
        onChange={(e) => handleInputChange("envio", "nombre", e.target.value)}
        error={!!errors.nombre}
        helperText={errors.nombre}
      />
      <TextField
        label="Apellido"
        fullWidth
        margin="normal"
        value={formData.envio.apellido}
        onChange={(e) => handleInputChange("envio", "apellido", e.target.value)}
        error={!!errors.apellido}
        helperText={errors.apellido}
      />
      <TextField
        label="DNI"
        fullWidth
        margin="normal"
        value={formData.envio.dni}
        onChange={(e) => handleInputChange("envio", "dni", e.target.value)}
        error={!!errors.dni}
        helperText={errors.dni}
      />
      <TextField
        label="Teléfono"
        fullWidth
        margin="normal"
        value={formData.envio.telefono}
        onChange={(e) => handleInputChange("envio", "telefono", e.target.value)}
        error={!!errors.telefono}
        helperText={errors.telefono}
      />
      <Typography variant="h6" sx={{ mt: 2 }}>
        Método de envío
      </Typography>
      <RadioGroup
        value={formData.envio.metodoEnvio}
        onChange={(e) => handleInputChange("envio", "metodoEnvio", e.target.value)}
      >
        <FormControlLabel
          value="retiro"
          control={<Radio />}
          label="Punto de Retiro - Alvear 1969, Corrientes Capital (Gratis)"
        />
        <FormControlLabel
          value="domicilio"
          control={<Radio />}
          label="Envío a Domicilio (Gratis) - Disponible en Corrientes Capital y alrededores sujeto a dias de entrega"
        />
      </RadioGroup>
    </Box>
  );
};

export default ShippingStep;
