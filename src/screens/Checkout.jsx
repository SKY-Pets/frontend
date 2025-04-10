import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Stepper,
  Step,
  StepLabel,
  TextField,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  TextareaAutosize,
} from "@mui/material";
import Cart from "../components/Cart/Cart"; // Asumo que este es el componente del carrito que mencionaste
import Sim from "../components/Sim/Sim";
import AppContext from "../context/AppContext";

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    envio: {
      email: "",
      nombre: "",
      apellido: "",
      dni: "",
      telefono: "",
    },
    pago: {
      metodo: "",
      calle: "",
      numero: "",
      piso: "",
      dpto: "",
      ciudad: "",
      provincia: "Corrientes",
      codigoPostal: "3400",
      notas: "",
    },
  });

  const steps = ["Envío", "Pago", "Revisión"];

  const { cart, clearCart } = useContext(AppContext);
  const isCartEmpty = cart.length === 0;
  window.scrollTo({ top: 0, behavior: "smooth" });
  const handleNext = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    } else {
      console.log("Datos finales: ", formData);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    }
  };

  const handleFinalize = () => {
    console.log("Datos finales: ", formData);
    // Vaciar el carrito de compras
    clearCart(); // Asegúrate de tener acceso a esta función desde el contexto o props
  };

  const handleInputChange = (step, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [step]: {
        ...prev[step],
        [field]: value,
      },
    }));
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box>
            <Typography variant="h6">Contacto</Typography>
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              value={formData.envio.email}
              onChange={(e) =>
                handleInputChange("envio", "email", e.target.value)
              }
            />

            <Typography variant="h6" sx={{ mt: 2 }}>
              Datos de quién retira
            </Typography>
            <TextField
              label="Nombre"
              fullWidth
              margin="normal"
              value={formData.envio.nombre}
              onChange={(e) =>
                handleInputChange("envio", "nombre", e.target.value)
              }
            />
            <TextField
              label="Apellido"
              fullWidth
              margin="normal"
              value={formData.envio.apellido}
              onChange={(e) =>
                handleInputChange("envio", "apellido", e.target.value)
              }
            />
            <TextField
              label="DNI"
              fullWidth
              margin="normal"
              value={formData.envio.dni}
              onChange={(e) =>
                handleInputChange("envio", "dni", e.target.value)
              }
            />
            <TextField
              label="Teléfono"
              fullWidth
              margin="normal"
              value={formData.envio.telefono}
              onChange={(e) =>
                handleInputChange("envio", "telefono", e.target.value)
              }
            />

            <Typography variant="h6" sx={{ mt: 2 }}>
              Método de envío
            </Typography>
            <Typography>
              Gratis: Retirar en el local - Alvear 1969, Corrientes Capital. Se
              acordará semanalmente. No olvidar la conservadora para mantener la
              cadena de frío.
            </Typography>
          </Box>
        );
      case 1:
        return (
          <Box>
            <Typography variant="h6">
              Seleccioná cómo querés pagar tu compra
            </Typography>
            <FormControl component="fieldset" sx={{ mt: 2 }}>
              <FormLabel component="legend">Método de Pago</FormLabel>
              <RadioGroup
                value={formData.pago.metodo}
                onChange={(e) =>
                  handleInputChange("pago", "metodo", e.target.value)
                }
              >
                <FormControlLabel
                  value="transferencia"
                  control={<Radio />}
                  label="Transferencia bancaria: ALIAS mp.skypets.ctes."
                />
                <FormControlLabel
                  value="efectivo"
                  control={<Radio />}
                  label="Efectivo"
                />
              </RadioGroup>
            </FormControl>

            <Typography variant="h6" sx={{ mt: 2 }}>
              Datos para facturación
            </Typography>
            <TextField
              label="Calle"
              fullWidth
              margin="normal"
              value={formData.pago.calle}
              onChange={(e) =>
                handleInputChange("pago", "calle", e.target.value)
              }
            />
            <TextField
              label="Número"
              fullWidth
              margin="normal"
              value={formData.pago.numero}
              onChange={(e) =>
                handleInputChange("pago", "numero", e.target.value)
              }
            />
            <TextField
              label="Piso (opcional)"
              fullWidth
              margin="normal"
              value={formData.pago.piso}
              onChange={(e) =>
                handleInputChange("pago", "piso", e.target.value)
              }
            />
            <TextField
              label="Departamento (opcional)"
              fullWidth
              margin="normal"
              value={formData.pago.dpto}
              onChange={(e) =>
                handleInputChange("pago", "dpto", e.target.value)
              }
            />
            <TextField
              label="Ciudad"
              fullWidth
              margin="normal"
              value={formData.pago.ciudad}
              onChange={(e) =>
                handleInputChange("pago", "ciudad", e.target.value)
              }
            />
            <TextField
              label="Notas del pedido (opcional)"
              fullWidth
              multiline
              rows={4}
              margin="normal"
              value={formData.pago.notas}
              onChange={(e) =>
                handleInputChange("pago", "notas", e.target.value)
              }
            />
          </Box>
        );
      case 2:
        return (
          <Box>
            <Typography variant="h6">Revisión</Typography>
            <Typography sx={{ mt: 2 }}>
              <strong>Email:</strong> {formData.envio.email}
            </Typography>
            <Typography>
              <strong>Nombre:</strong> {formData.envio.nombre}
            </Typography>
            <Typography>
              <strong>Apellido:</strong> {formData.envio.apellido}
            </Typography>
            <Typography>
              <strong>DNI:</strong> {formData.envio.dni}
            </Typography>
            <Typography>
              <strong>Teléfono:</strong> {formData.envio.telefono}
            </Typography>

            <Typography sx={{ mt: 2 }}>
              <strong>Método de Pago:</strong> {formData.pago.metodo}
            </Typography>
            <Typography>
              <strong>Domicilio:</strong> {formData.pago.calle}{" "}
              {formData.pago.numero}
            </Typography>
            <Typography>
              <strong>Ciudad:</strong> {formData.pago.ciudad}
            </Typography>
            <Typography>
              <strong>Notas:</strong> {formData.pago.notas || "Ninguna"}
            </Typography>
          </Box>
        );
      default:
        return null;
    }
  };
  if (isCartEmpty) {
    return <Sim />;
  }
  return (
    <Box display="flex" flexDirection={{ xs: "column", md: "row" }}>
      <Box flex={1} p={2}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Box mt={4}>{renderStepContent(activeStep)}</Box>

        <Box mt={4} display="flex" justifyContent="space-between">
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            variant="outlined"
          >
            Anterior
          </Button>
          <Button
            onClick={
              activeStep === steps.length - 1 ? handleFinalize : handleNext
            }
            variant="contained"
          >
            {activeStep === steps.length - 1 ? "Finalizar" : "Siguiente"}
          </Button>
        </Box>
      </Box>

      <Box width={{ xs: "100%", md: "30%" }} p={2}>
        <Cart />
      </Box>
    </Box>
  );
};

export default Checkout;
