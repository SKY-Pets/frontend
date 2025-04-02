import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PetIcon from "@mui/icons-material/Pets";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";

const Navigationbar = () => {
  const [open, setOpen] = useState(false);
  const isLoggedIn = localStorage.getItem("uid");
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
      visible: isLoggedIn? true : false,
    }
  ].filter((item) => item.visible === true);
  return (
    <>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <IconButton
            sx={{ display: { xs: "block", sm: "none" } }}
            color="inherit"
            size="large"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <a href="/">
            <img src="/logo-arg.png" width={70} alt="Logo" ></img>
          </a>
          <Typography variant="h5" color="text" fontWeight="bold"  pl={3} flexGrow={1}>
            SKY Pets
          </Typography>
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
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{ display: { xs: "block", sm: "none" } }}
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
      >
        <NavListDrawer navLinks={navLinks} />
      </Drawer>
    </>
  );
};

export default Navigationbar;

