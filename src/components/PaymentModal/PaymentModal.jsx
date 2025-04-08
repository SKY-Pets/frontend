import { Dialog, DialogTitle, DialogContent, IconButton, Button, Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const PaymentModal = ({ isOpen, onClose, priceEfectivo, priceTransferencia }) => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const paymentOptions = {
    efectivo: priceEfectivo,
    transferencia: priceTransferencia
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
        {/* Botones para seleccionar el método */}
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
            Efectivo
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

        {/* Descripción y precio */}
        {selectedMethod && (
          <>
            <Typography mt={2} textAlign="center">
              <strong>{selectedMethod}</strong>.{selectedMethod === "efectivo" ? " Podés pagar en efectivo retirando personalmente en nuestros puntos de retiro" : " Al finalizar la compra te llegará un email con los datos bancarios para realizar la transferencia."}
            </Typography>
            <Box display="flex" justifyContent="center" mt={2}>
              <Button
                variant="outlined"
                color="inherit"
                sx={{
                  borderColor: "black",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "black",
                    color: "white"
                  }
                }}
              >
                Total : <strong> ${paymentOptions[selectedMethod]}</strong> 
              </Button>
            </Box>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
