// api.js

const hardcodedProducts = [
  {
    id: 1,
    name: "Snack Higado Premium",
    images: ["/mockimages/mock1.jpeg", "/mockimages/mock2.jpeg"],
    price: 3500,
    stock: true,
    details: "Un snack premium elaborado con hígado de la mejor calidad.",
    presentation: "Bolsa de 200g",
    instructions: "Administrar de acuerdo a la indicación del veterinario.",
  },
  {
    id: 2,
    name: "Snack Carne roastbeef",
    images: ["/mockimages/mock2.jpeg", "/mockimages/mock2.jpeg"],
    price: 1200,
    stock: false,
    details: "Deliciosos snacks de carne sabor roastbeef, perfectos para premiar a tu mascota.",
    presentation: "Bolsa de 150g",
    instructions: "Suministrar como premio entre comidas."
  },
  {
    id: 3,
    name: "Snack Pancita Chiken",
    images: ["/mockimages/mock3.jpeg", "/mockimages/mock2.jpeg"],
    price: 5200,
    stock: true,
    details: "Bocadillos crujientes de pancita de pollo, ricos en proteínas.",
    presentation: "Bolsa de 180g",
    instructions: "No exceder la cantidad recomendada por día."
  },
  {
    id: 4,
    name: "Snack Tendon masticable",
    images: ["/mockimages/mock4.jpeg", "/mockimages/mock2.jpeg"],
    price: 3500,
    stock: true,
    details: "Masticable natural que fortalece la dentadura de tu mascota.",
    presentation: "Bolsa de 250g",
    instructions: "Ideal para perros de raza mediana y grande."
  },
  {
    id: 5,
    name: "Snack Higado Premium",
    images: ["/mockimages/mock1.jpeg", "/mockimages/mock2.jpeg"],
    price: 3500,
    stock: true,
    details: "Un snack premium elaborado con hígado de la mejor calidad.",
    presentation: "Bolsa de 200g",
    instructions: "Administrar de acuerdo a la indicación del veterinario.",
  },
  {
    id: 6,
    name: "Snack Carne roastbeef",
    images: ["/mockimages/mock2.jpeg", "/mockimages/mock2.jpeg"],
    price: 1200,
    stock: false,
    details: "Deliciosos snacks de carne sabor roastbeef, perfectos para premiar a tu mascota.",
    presentation: "Bolsa de 150g",
    instructions: "Suministrar como premio entre comidas."
  },
  {
    id: 7,
    name: "Snack Pancita Chiken",
    images: ["/mockimages/mock3.jpeg", "/mockimages/mock2.jpeg"],
    price: 5200,
    stock: true,
    details: "Bocadillos crujientes de pancita de pollo, ricos en proteínas.",
    presentation: "Bolsa de 180g",
    instructions: "No exceder la cantidad recomendada por día."
  },
  {
    id: 8,
    name: "Snack Tendon masticable",
    images: ["/mockimages/mock4.jpeg", "/mockimages/mock2.jpeg"],
    price: 3500,
    stock: true,
    details: "Masticable natural que fortalece la dentadura de tu mascota.",
    presentation: "Bolsa de 250g",
    instructions: "Ideal para perros de raza mediana y grande."
  }
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(hardcodedProducts), 500); // Simula un delay de 500ms
  });
};