import { Dialog, DialogTitle, DialogContent, IconButton, Button, Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const PaymentModal = ({ isOpen, onClose, price }) => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const paymentOptions = {
    efectivo: price * 0.9, // 10% de descuento
    transferencia: price
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      {/* Encabezado con la X */}
      <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
        <DialogTitle sx={{ flexGrow: 1 }}>Selecciona un método de pago</DialogTitle>
        <IconButton onClick={onClose} size="small">
          <CloseIcon />
        </IconButton>
      </Box>

      <DialogContent>
        <Box display="flex" justifyContent="center" gap={2} mt={2}>
          <Button 
            variant={selectedMethod === "efectivo" ? "contained" : "outlined"} 
            color="inherit"
            onClick={() => setSelectedMethod("efectivo")}
            sx={{
              backgroundColor: selectedMethod === "efectivo" ? "black" : "transparent",
              color: selectedMethod === "efectivo" ? "white" : "black",
              borderColor: "black",
              "&:hover": {
                backgroundColor: "black",
                color: "white"
              }
            }}
          >
            Efectivo (10% descuento)
          </Button>

          <Button 
            variant={selectedMethod === "transferencia" ? "contained" : "outlined"} 
            color="inherit"
            onClick={() => setSelectedMethod("transferencia")}
            sx={{
              backgroundColor: selectedMethod === "transferencia" ? "black" : "transparent",
              color: selectedMethod === "transferencia" ? "white" : "black",
              borderColor: "black",
              "&:hover": {
                backgroundColor: "black",
                color: "white"
              }
            }}
          >
            Transferencia
          </Button>
        </Box>

        {selectedMethod && (
          <Typography mt={2} textAlign="center">
            <strong>{selectedMethod}</strong>.{selectedMethod === "efectivo" ? " Podés pagar en efectivo retirando personalmente en nuestros puntos de retiro": "Al finalizar la compra te va a llegar un email con los datos bancarios para realizar la transferencia"} 
          </Typography>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
