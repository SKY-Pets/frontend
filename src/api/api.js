// api.js

const hardcodedProducts = [
    {
      id: 1,
      name: "Snack Higado Premium",
      image: "/mockimages/mock1.jpeg",
      price: 3500,
      stock: true,
    },
    {
      id: 2,
      name: "Snack Carne roastbeef",
      image:"/mockimages/mock2.jpeg",
      price: 1200,
      stock: false,
    },
    {
      id: 3,
      name: "Snack Pancita Chiken",
      image: "/mockimages/mock3.jpeg",
      price: 5200,
      stock: true,
    },
    {
      id: 4,
      name: "Snack Tendon masticable",
      image: "/mockimages/mock4.jpeg",
      price: 3500,
      stock: true,
    },
    {
      id: 5,
      name: "Snack Corazon beef",
      image:"/mockimages/mock1.jpeg",
      price: 1200,
      stock: false,
    },
    {
      id: 6,
      name: "Snack Corazon Chiken",
      image: "/mockimages/mock4.jpeg",
      price: 5200,
      stock: true,
    },
  ];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(hardcodedProducts), 500); // Simula un delay de 500ms
    });
  };
  