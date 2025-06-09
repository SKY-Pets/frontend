import React, { useContext, useState } from "react";
import { Box, Button, Stepper, Step, StepLabel, Modal, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Cart from "../components/Cart/Cart";
import AppContext from "../context/AppContext";
import ShippingStep from "../components/Checkout/ShippingStep";
import PaymentStep from "../components/Checkout/PaymentStep";
import ReviewStep from "../components/Checkout/ReviewStep";
import Sim from "../components/Sim/Sim";
import emailjs from "@emailjs/browser";

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    envio: { email: "", nombre: "", apellido: "", dni: "", telefono: "", metodoEnvio: "retiro" },
    pago: { metodo: "efectivo", calle: "", numero: "", notas: "" },
  });
  const [errors, setErrors] = useState({});
  const [modalOpen, setModalOpen] = useState(false); // Estado para controlar el modal
  const [modalOkOpen, setModalOkOpen] = useState(false);
  const navigate = useNavigate();
  const steps = ["Envío", "Pago", "Revisión"];
  const { cart, clearCart } = useContext(AppContext);
  const isCartEmpty = cart.length === 0;

  const handleInputChange = (step, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [step]: { ...prev[step], [field]: value },
    }));
    setErrors((prev) => ({ ...prev, [field]: "" })); // Limpiar errores al escribir
  };

  const validateStep = () => {
    if (activeStep === 0) {
      const requiredFields = ["email", "nombre", "apellido", "dni", "telefono"];
      const newErrors = requiredFields.reduce((acc, field) => {
        if (!formData.envio[field].trim()) {
          acc[field] = "Este campo es obligatorio";
        }
        return acc;
      }, {});
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0; // Si no hay errores, la validación es exitosa
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep()) {
      if (activeStep === steps.length - 1) {
        handleFinalize();
      } else {
        setActiveStep((prev) => prev + 1);
      }
    }
  };

  const handleFinalize = () => {
    const formattedCart = cart.map(
      (item) => `${item.name} (Cantidad: ${item.quantity}, Precio: $${item.price})`
    ).join(", ");
  
    const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
  
    emailjs
      .send(
        "service_k3rz50i", // ID del servicio
        "template_w7yvhut", // ID de la plantilla
        {
          formData:formData,
          carrito: formattedCart,
          total: `$${total}`,
          email: formData.envio.email
        },
        "CHl40qhYDkG3nJsEZ" // Clave pública
      )
      .then(() => {
        setModalOkOpen(true); // Mostrar el modal de confirmación
        
      })
      .catch((error) => {
        console.error("Error al enviar el correo:", error);
      });
  };
  

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <ShippingStep formData={formData} handleInputChange={handleInputChange} errors={errors} />;
      case 1:
        return <PaymentStep formData={formData} handleInputChange={handleInputChange} />;
      case 2:
        return <ReviewStep formData={formData} />;
      default:
        return null;
    }
  };

  if (isCartEmpty) {
    return <Sim />;
  }

  return (
    <Box>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box display="flex" justifyContent="space-around" flexDirection={{ xs: "column", md: "row" }}>
        <Box>{renderStepContent(activeStep)}</Box>
        <Box width={{ xs: "100%", md: "30%" }} p={2}>
          <Cart />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt={2}>
        <Button disabled={activeStep === 0} onClick={() => setActiveStep((prev) => prev - 1)}>
          Anterior
        </Button>
        <Button onClick={handleNext}>
          {activeStep === steps.length - 1 ? "Finalizar" : "Siguiente"}
        </Button>
      </Box>
      <Modal open={modalOkOpen} onClose={() => setModalOkOpen(false)}>
        
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Box alignItems="center" display="flex" justifyContent="center" mt={2}>
          <img src="/logo-arg.png" width={50}></img>
          </Box>
          <Typography variant="h6" textAlign="center">
            ¡Compra exitosa!
          </Typography>
          <Typography mt={2} textAlign="center">
            En breve nos contactaremos vía correo electrónico o teléfono. Muchas gracias por confiar en SKY Pets !! 🦦
          </Typography>
          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 3 }}
            onClick={() => {
              setModalOpen(false);
              navigate("/");
              clearCart(); // Vaciar el carrito
              
            }}
          >
            Volver al inicio
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Checkout;
