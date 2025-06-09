import React, { useContext, useState } from "react";
import {
  Modal,
  Box,
  Typography,
  IconButton,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  Select,
  MenuItem,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import AppContext from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import Sim from "../Sim/Sim";

const CartModal = ({ open, handleClose }) => {
  const { cart, removeFromCart } = useContext(AppContext);
  const [paymentMethod, setPaymentMethod] = useState("Tarjeta de crédito");
  const navigate = useNavigate();

  const handleChangePaymentMethod = (event) => {
    setPaymentMethod(event.target.value);
  };

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const isCartEmpty = cart.length === 0;

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          maxWidth: 600,
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          p: 3,
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" fontWeight="bold">
            Carrito de compras
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        {isCartEmpty ? (
          <Sim />
        ) : (
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Divider sx={{ my: 2 }} />

            <List>
              {cart.map((item) => (
                <React.Fragment key={item.id}>
                  <ListItem
                    alignItems="flex-start"
                    secondaryAction={
                      <IconButton
                        edge="end"
                        color="error"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    }
                  >
                    <ListItemAvatar>
                      <Avatar src={item.images[0]} alt={item.name} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={item.name}
                      secondary={`Cantidad: ${item.quantity} x Precio unitario: $${item.price.toLocaleString()} | Subtotal: $${(
                        item.price * item.quantity
                      ).toLocaleString()}`}
                    />
                  </ListItem>
                  <Divider component="li" />
                </React.Fragment>
              ))}
            </List>

            {/* <Box mt={2}>
              <Typography variant="subtitle1" fontWeight="bold">
                Método de pago:
              </Typography>
              <Select
                value={paymentMethod}
                onChange={handleChangePaymentMethod}
                fullWidth
                sx={{ mt: 1 }}
                disabled={isCartEmpty}
              >
                <MenuItem value="Efectivo">Efectivo</MenuItem>
                <MenuItem value="Transferencia bancaria">
                  Transferencia bancaria
                </MenuItem>
              </Select>
            </Box> */}

            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ textAlign: "right", mt: 2 }}
            >
              Total: ${totalAmount.toLocaleString()}
            </Typography>

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mt={3}
            >
              <Button variant="outlined" onClick={handleClose}>
                Seguir comprando
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  handleClose();
                  navigate("/checkout");
                }}
                disabled={isCartEmpty}
              >
                Iniciar compra
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Modal>
  );
};

export default CartModal;
