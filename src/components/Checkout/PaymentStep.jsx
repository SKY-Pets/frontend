import React from "react";
import { Box, Typography, TextField, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel } from "@mui/material";

const PaymentStep = ({ formData, handleInputChange }) => {
  return (
    <Box>
      <Typography variant="h6"  mt={2} >Seleccioná cómo querés pagar tu compra</Typography>
      <FormControl component="fieldset" sx={{ mt: 2 }}>
        <FormLabel component="legend">Método de Pago</FormLabel>
        <RadioGroup
          value={formData.pago.metodo}
          onChange={(e) => handleInputChange("pago", "metodo", e.target.value)}
        >
          <FormControlLabel
            value="transferencia"
            control={<Radio />}
            label="Transferencia bancaria: ALIAS sky.corrientes - Recordá para que tu pedido sea reservado, debes abonarlo dentro de 48 horas. Pasado ese tiempo se da de BAJA AUTOMATICAMENTE."
          />
          <FormControlLabel value="efectivo" control={<Radio />} label="Efectivo" />
        </RadioGroup>
      </FormControl>
      <Typography variant="h6" sx={{ mt: 2 }}>
        Datos para entrega a Domicilio y facturación
      </Typography>
      <TextField
        label="Calle (opcional)"
        fullWidth
        margin="normal"
        value={formData.pago.calle}
        onChange={(e) => handleInputChange("pago", "calle", e.target.value)}
      />
      <TextField
        label="Número (opcional)"
        fullWidth
        margin="normal"
        value={formData.pago.numero}
        onChange={(e) => handleInputChange("pago", "numero", e.target.value)}
      />
      <TextField
        label="Notas del pedido (opcional)"
        fullWidth
        multiline
        rows={4}
        margin="normal"
        value={formData.pago.notas}
        onChange={(e) => handleInputChange("pago", "notas", e.target.value)}
      />
    </Box>
  );
};

export default PaymentStep;
