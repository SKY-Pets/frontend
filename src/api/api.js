// api.js

const hardcodedProducts = [
  {
    id: 10,
    name: "Snack Higado Premium",
    images: ["/mockimages/higado1.jpeg", "/mockimages/higado2.jpeg","/mockimages/higado3.jpeg","/mockimages/higado4.jpeg"],
    price: 3000,
    stock: true,
    details: "Un snack premium elaborado con hígado de vaca.",
    presentation: "Bolsa contenedora de 100g neto",
    instructions: "Administrar de acuerdo a la indicación del veterinario.",
  },
  {
    id: 20,
    name: "Snack Pancita Chiken",
    images: ["/mockimages/pancita0.jpeg", "/mockimages/pancita1.jpeg","/mockimages/pancita2.jpeg"],
    price: 3500,
    stock: true,
    details: "Deliciosos snacks de pancita de pollo, perfectos para premiar a tu mascota.",
    presentation: "Bolsa de 100g",
    instructions: "Suministrar como premio entre comidas."
  },
  {
    id: 30,
    name: "Caldo de Hueso",
    images: ["/mockimages/ch1.jpeg", "/mockimages/ch2.jpeg", "/mockimages/ch3.jpeg", "/mockimages/ch4.jpeg"],
    price: 1500,
    stock: true,
    details: "Caldo de Hueso congelado, ricos en colageno.",
    presentation: "Pote de 120ml",
    instructions: "No exceder la cantidad recomendada por día."
  },
  {
    id: 40,
    name: "Snack Tendón masticable Pequeño",
    images: ["/mockimages/tendon1.jpeg", "/mockimages/tendonChico.jpeg", "/mockimages/tendon3.jpeg"],
    price: 3000,
    stock: true,
    details: "Masticable natural que fortalece la dentadura de tu mascota. Vacuno. Tamaño pequeño (12cm aprox.).",
    presentation: "Bolsa de 100gr",
    instructions: "Ideal para gatos y perros de tamaño pequeño."
  },
  {
    id: 41,
    name: "Snack Tendón masticable Mediano",
    images: ["/mockimages/tendon1.jpeg", "/mockimages/tendonMediano.jpeg", "/mockimages/tendon3.jpeg"],
    price: 4000,
    stock: true,
    details: "Masticable natural que fortalece la dentadura de tu mascota. Vacuno. Tamaño mediano (16cm aprox.).",
    presentation: "Bolsa de 150gr",
    instructions: "Ideal para perros de tamaño mediano y pequeño."
  },
  {
    id: 42,
    name: "Snack Tendón masticable Grande",
    images: ["/mockimages/tendon1.jpeg", "/mockimages/tendonGrande.jpeg", "/mockimages/tendon3.jpeg"],
    price: 5000,
    stock: true,
    details: "Masticable natural que fortalece la dentadura de tu mascota. Vacuno. Tamaño grande (25cm aprox.).",
    presentation: "Bolsa de 200gr",
    instructions: "Ideal para perros de tamaño grande."
  },
  {
    id: 50,
    name: "Yogurt Natural",
    images: ["/mockimages/yogurt1.png"],
    price: 5000,
    stock: false,
    details: "Sin azucares ni conservantes, congelado.",
    presentation: "Pote de 140cc",
    instructions: "No exceder la cantidad recomendada por día."
  }
  ,
  {
    id: 60,
    name: "Garritas de Pollo crudas",
    images: ["/mockimages/garritas.png"],
    price: 1500,
    stock: true,
    details: "Garritas de pollo crudas congeladas.",
    presentation: "Bolsa de 200gr",
    instructions: "No exceder la cantidad recomendada por día. Se recomienda supervisar el consumo en las primeras veces."
  }
  ,
  {
    id: 70,
    name: "Tendón crudo",
    images: ["/mockimages/tendonCrudo.jpeg"],
    price: 3000,
    stock: false,
    details: "Tendón crudo congelado.",
    presentation: "Bolsa de 200gr",
    instructions: "No exceder la cantidad recomendada por día. Se recomienda supervisar el consumo en las primeras veces."
  }
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(hardcodedProducts), 500); // Simula un delay de 500ms
  });
};