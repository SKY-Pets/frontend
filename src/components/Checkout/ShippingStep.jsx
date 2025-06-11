import React from "react";
import {
  Box,
  Typography,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";

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
        onChange={(e) =>
          handleInputChange("envio", "metodoEnvio", e.target.value)
        }
      >
        <FormControlLabel
          value="retiro"
          control={<Radio />}
          label={
            <Box display="flex" alignItems="center">
              <StoreIcon style={{ marginRight: 8 }} />
              <Box>
                <Typography variant="body1" color="textPrimary">
                  Punto de Retiro
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Alvear 1969, Corrientes Capital (Gratis)
                </Typography>
              </Box>
            </Box>
          }
        />

        <FormControlLabel
          value="domicilio"
          control={<Radio />}
          label={
            <Box display="flex" alignItems="center">
              <HomeIcon style={{ marginRight: 8 }} />
              <Box>
                <Typography variant="body1" color="textPrimary">
                  Envío a Domicilio
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Disponible en Corrientes Capital y alrededores sujeto a días
                  de entrega (Gratis) - El vendedor se contactará con usted.
                </Typography>
              </Box>
            </Box>
          }
        />
      </RadioGroup>
    </Box>
  );
};

export default ShippingStep;
