// api.js

const hardcodedProducts = [
    {
      id: 1,
      name: "Snack Higado Premium",
      image: "../../public/mockimages/mock1.jpeg",
      price: 3500,
      stock: true,
    },
    {
      id: 2,
      name: "Snack Carne roastbeef",
      image:"../../public/mockimages/mock2.jpeg",
      price: 1200,
      stock: false,
    },
    {
      id: 3,
      name: "Snack Pancita Chiken",
      image: "../../public/mockimages/mock3.jpeg",
      price: 5200,
      stock: true,
    },
    {
      id: 4,
      name: "Snack Tendon masticable",
      image: "../../public/mockimages/mock4.jpeg",
      price: 3500,
      stock: true,
    },
    {
      id: 5,
      name: "Snack Corazon beef",
      image:"../../public/mockimages/mock1.jpeg",
      price: 1200,
      stock: false,
    },
    {
      id: 6,
      name: "Snack Corazon Chiken",
      image: "../../public/mockimages/mock4.jpeg",
      price: 5200,
      stock: true,
    },
  ];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(hardcodedProducts), 500); // Simula un delay de 500ms
    });
  };
  