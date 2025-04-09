import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  Badge,
} from "@mui/material";
import { useState, useContext, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PetIcon from "@mui/icons-material/Pets";
import HomeIcon from "@mui/icons-material/Home";
import AppContext from "../../context/AppContext"; // Importa tu AppContext
import NavListDrawer from "./NavListDrawer";
import CartModal from "../CartModal/CartModal"; // Importa el componente del modal del carrito
import "./Navbar.css";

const Navigationbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openModal, setOpenModal] = useState(false); // Estado para el modal del carrito
  const [isShaking, setIsShaking] = useState(false); // Estado para la animación

  // Obtén el estado del carrito desde el contexto
  const { cart } = useContext(AppContext);

  // Calcula el total de productos en el carrito
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Detecta cambios en el carrito y activa la animación
  useEffect(() => {
    if (cart.length > 0) {
      setIsShaking(true);
      // Desactiva la animación después de 1 segundo
      const timeout = setTimeout(() => setIsShaking(false), 1000);
      return () => clearTimeout(timeout);
    }
  }, [cart]);

  const navLinks = [
    {
      title: "Inicio",
      path: "/",
      icon: <HomeIcon />,
      visible: true,
    },
    {
      title: "Productos",
      path: "/products",
      icon: <PetIcon />,
      visible: true,
    },
    {
      title: "Contacto",
      path: "/contact",
      icon: <DashboardIcon />,
      visible: true,
    },
  ].filter((item) => item.visible === true);

  return (
    <>
      <AppBar position="sticky" elevation={0} sx={{ bgcolor: "white" }}>
        <Toolbar>
          {/* Botón para menú móvil */}
          <IconButton
            sx={{ display: { xs: "block", sm: "none" } }}
            color="inherit"
            size="large"
            onClick={() => setOpenDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <a href="/">
            <img src="/logo-arg.png" width={70} alt="Logo"></img>
          </a>

          {/* Título */}
          <Typography
            variant="h5"
            color="black"
            fontWeight="bold"
            pl={3}
            flexGrow={1}
          >
            SKY Pets
          </Typography>

          {/* Navegación en pantallas grandes */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navLinks.map((item) => (
              <Button
                color="inherit"
                key={item.title}
                component="a"
                href={item.path}
              >
                {item.title}
              </Button>
            ))}
          </Box>
          <div className={isShaking ? 'shake-animation' : ''}>
            {/* Ícono de carrito */}
            <Box sx={{ ml: 2 }}>
              <IconButton
                color="inherit"
                onClick={() => setOpenModal(true)} // Abre el modal al hacer clic
              >
                <Badge
                  badgeContent={cartCount}
                  color="error"
                  sx={{
                    "& .MuiBadge-badge": {
                      backgroundColor: "#ff5722", // Color del contador
                      color: "#fff",
                    },
                  }}
                >
                  <img
                    src="/bolsa.png"
                    alt="Carrito"
                    width={35}
                    height={35}
                    style={{ borderRadius: "50%" }}
                  />
                </Badge>
              </IconButton>
            </Box>
          </div>
        </Toolbar>
      </AppBar>

      {/* Menú móvil */}
      <Drawer
        sx={{ display: { xs: "block", sm: "none" } }}
        open={openDrawer}
        anchor="left"
        onClose={() => setOpenDrawer(false)}
      >
        <NavListDrawer navLinks={navLinks} />
      </Drawer>

      {/* Modal del carrito */}
      <CartModal open={openModal} handleClose={() => setOpenModal(false)} />
    </>
  );
};

export default Navigationbar;
