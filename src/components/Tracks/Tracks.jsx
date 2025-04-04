import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "./dog.json"; 
import bolsa from "./bolsa.png";
import { Box } from "@mui/material";
import { useEffect } from "react";

const Tracks = () => {
  useEffect(() => {
    // Desplazarse al fondo de la página
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth", // Opcional: para un desplazamiento suave
    });
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Player
        autoplay
        loop
        src={animationData}
        style={{ height: "150px", width: "150px" }}
      />
      <img src={bolsa} alt="Tracks" style={{ width: "50px", position: "absolute", top: "-15",right: window.innerWidth < 600 ? "75%" : "30%" ,transform: "rotate(-15deg)" }} /> 
    </Box>
  );
};

export default Tracks;
