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
import DeleteIcon from "@mui/icons-material/Delete"; // Importar el ícono de tacho de basura
import AppContext from "../../context/AppContext"; // Asegúrate de tener AppContext configurado
import { useNavigate } from "react-router-dom";

const CartModal = ({ open, handleClose }) => {
  const { cart, removeFromCart } = useContext(AppContext); // Accede a la función para eliminar items
  const [paymentMethod, setPaymentMethod] = useState("Tarjeta de crédito");
  const navigate = useNavigate();

  const handleChangePaymentMethod = (event) => {
    setPaymentMethod(event.target.value);
  };

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Box>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" fontWeight="bold">
          Carrito de compras
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Lista de productos */}
      <List>
        {cart.map((item) => (
          <React.Fragment key={item.id}>
            <ListItem
              alignItems="flex-start"
              secondaryAction={
                <IconButton
                  edge="end"
                  color="error"
                  onClick={() => removeFromCart(item.id)} // Llamar a la función para eliminar
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
                secondary={`Cantidad: ${item.quantity} | Subtotal: $${(
                  item.price * item.quantity
                ).toLocaleString()}`}
              />
            </ListItem>
            <Divider component="li" />
          </React.Fragment>
        ))}
      </List>

      {/* Total */}
      <Typography
        variant="h6"
        fontWeight="bold"
        sx={{ textAlign: "right", mt: 2 }}
      >
        Total: ${totalAmount.toLocaleString()}
      </Typography>
    </Box>
  );
};

export default CartModal;
