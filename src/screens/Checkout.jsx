import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Stepper,
  Step,
  StepLabel,
  Modal,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Cart from "../components/Cart/Cart";
import AppContext from "../context/AppContext";
import ShippingStep from "../components/Checkout/ShippingStep";
import PaymentStep from "../components/Checkout/PaymentStep";
import ReviewStep from "../components/Checkout/ReviewStep";
import Tracks from "../components/Tracks/Tracks"; // Importar el Tracks
import { createOrder } from "../api/api"; // Importar el servicio de orders
import emailjs from "@emailjs/browser";
import Sim from "../components/Sim/Sim";
import { grey } from "@mui/material/colors";

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    envio: {
      email: "",
      nombre: "",
      apellido: "",
      dni: "",
      telefono: "",
      metodoEnvio: "retiro",
    },
    pago: { metodo: "efectivo", calle: "", numero: "", notas: "" },
  });
  const [errors, setErrors] = useState({});
  const [modalOkOpen, setModalOkOpen] = useState(false);
  const [loading, setLoading] = useState(false); // Estado para el Tracks
  const [orderId, setOrderId] = useState(null); // Estado para el identificador del pedido
  const [error, setError] = useState(null); // Estado para errores
  const navigate = useNavigate();
  const steps = ["Envío", "Pago", "Revisión"];
  const { cart, clearCart } = useContext(AppContext);
  const isCartEmpty = cart.length === 0;

  const handleInputChange = (step, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [step]: { ...prev[step], [field]: value },
    }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const generateOrderId = () => {
    const now = new Date();
    const randomDigit = Math.floor(Math.random() * 9) + 1;
    const orderId = `${randomDigit}${now.getHours()}${now.getMinutes()}${now.getSeconds()}${now.getFullYear()}${String(
      now.getMonth() + 1
    ).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}`;
    return orderId;
  };

 const handleFinalize = () => {
  setLoading(true);
  setError(null);

  const orderItems = cart.map((item) => ({
    productId: item.id,
    price: item.price,
    name: item.name,
    quantity: item.quantity,
  }));

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const orderData = {
    orderId: generateOrderId(),
    customerDni: formData.envio.dni,
    customerName: `${formData.envio.nombre} ${formData.envio.apellido}`,
    customerEmail: formData.envio.email,
    customerPhone: formData.envio.telefono,
    paymentType: formData.pago.metodo,
    delivery: formData.envio.metodoEnvio,
    deliveryAddress: `${formData.pago.calle} ${formData.pago.numero}`,
    items: orderItems,
    totalPrice,
    orderDate: new Date().toISOString().split("T")[0],
    status: "pending",
  };

  createOrder(orderData)
    .then((response) => {
      setOrderId(response.id);

      // Enviar correo electrónico
      const formattedCart = cart
        .map(
          (item) =>
            `${item.name} (Cantidad: ${item.quantity}, Precio Unitario: $${item.price})`
        )
        .join(", ");

      return emailjs.send(
        "service_sly4t6n",
        "template_w7yvhut",
        {
          orderId: orderData.orderId,
          formData: formData,
          carrito: formattedCart,
          total: `$${totalPrice}`,
          email: formData.envio.email,
        },
        "CHl40qhYDkG3nJsEZ"
      );
    })
    .then(() => {
      console.log("Correo enviado exitosamente");
    })
    .catch((err) => {
      console.error(
        "El pedido se creó correctamente, pero hubo un problema con el correo:",
        err
      );
    })
    .finally(() => {
      setModalOkOpen(true);
      setLoading(false);
    });
};


  const validateStep = () => {
    if (activeStep === 0) {
      window.scrollTo(0, 0);
      const requiredFields = ["email", "nombre", "apellido", "dni", "telefono"];
      const newErrors = requiredFields.reduce((acc, field) => {
        if (!formData.envio[field].trim()) {
          acc[field] = "Este campo es obligatorio";
        }
        return acc;
      }, {});
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    }
    return true;
  };

  const handleNext = () => {
    window.scrollTo(0, 0);
    if (validateStep()) {
      if (activeStep === steps.length - 1) {
        handleFinalize();
      } else {
        setActiveStep((prev) => prev + 1);
      }
    }
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <ShippingStep
            formData={formData}
            handleInputChange={handleInputChange}
            errors={errors}
          />
        );
      case 1:
        return (
          <PaymentStep
            formData={formData}
            handleInputChange={handleInputChange}
          />
        );
      case 2:
        return <ReviewStep formData={formData} />;
      default:
        return null;
    }
  };
  if (loading) {
    return <Tracks />;
  }

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
      <Box
        display="flex"
        justifyContent="space-around"
        flexDirection={{ xs: "column", md: "row" }}
      >
        <Box>{renderStepContent(activeStep)}</Box>
        <Box width={{ xs: "100%", md: "30%" }} p={2}>
          <Cart />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt={2}>
        <Button
          disabled={activeStep === 0}
          onClick={() => {
            window.scrollTo(0, 0);
            setActiveStep((prev) => prev - 1);
          }}
        >
          Anterior
        </Button>
        <Button onClick={handleNext}>
          {activeStep === steps.length - 1 ? "Finalizar" : "Siguiente"}
        </Button>
      </Box>
      <Modal open={modalOkOpen} onClose={() => {
              setModalOkOpen(false);
              navigate("/");
              clearCart(); // Vaciar el carrito
            }}>
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
            En breve nos contactaremos vía correo electrónico o teléfono. Muchas
            gracias por confiar en SKY Pets !! 🦦
          </Typography>
          <Typography color="gray" fontSize={10} textAlign="center">referencia: {orderId}</Typography>
          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 3 }}
            onClick={() => {
              setModalOkOpen(false);
              navigate("/");
              clearCart(); // Vaciar el carrito
            }}
          >
            Volver al inicio
          </Button>
        </Box>
      </Modal>
      {error && <Typography color="error">{error}</Typography>}
    </Box>
  );
};

export default Checkout;
