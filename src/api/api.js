// api.js

const hardcodedProducts = [
  {
    id: 1,
    name: "Snack Higado Premium",
    images: ["/mockimages/higado1.jpeg", "/mockimages/higado2.jpeg","/mockimages/higado3.jpeg","/mockimages/higado4.jpeg"],
    price: 2500,
    stock: true,
    details: "Un snack premium elaborado con hígado de vaca.",
    presentation: "Bolsa contenedora de 150g neto",
    instructions: "Administrar de acuerdo a la indicación del veterinario.",
  },
  {
    id: 2,
    name: "Snack Pancita Chiken",
    images: ["/mockimages/pancita0.jpeg", "/mockimages/pancita1.jpeg","/mockimages/pancita2.jpeg","/mockimages/pancita3.jpeg"],
    price: 3500,
    stock: false,
    details: "Deliciosos snacks de pancita de pollo, perfectos para premiar a tu mascota.",
    presentation: "Bolsa de 150g",
    instructions: "Suministrar como premio entre comidas."
  },
  {
    id: 3,
    name: "Caldo de Hueso",
    images: ["/mockimages/ch1.jpeg", "/mockimages/ch2.jpeg", "/mockimages/ch3.jpeg", "/mockimages/ch4.jpeg"],
    price: 1000,
    stock: true,
    details: "Caldo de Hueso congelado, ricos en colageno.",
    presentation: "Pote de 140cc",
    instructions: "No exceder la cantidad recomendada por día."
  },
  {
    id: 4,
    name: "Snack Tendon masticable",
    images: ["/mockimages/tendon1.jpeg", "/mockimages/tendon2.jpeg", "/mockimages/tendon3.jpeg"],
    price: 3500,
    stock: true,
    details: "Masticable natural que fortalece la dentadura de tu mascota.",
    presentation: "Bolsa de 150g",
    instructions: "Ideal para perros de raza mediana y grande."
  }
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(hardcodedProducts), 500); // Simula un delay de 500ms
  });
};