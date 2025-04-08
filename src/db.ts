const products = [
  {
    id: "1",
    name: "Product 1",
    description: "Description for product 1",
    price: 10.99,
    image: "https://via.placeholder.com/150",
    categoryId: "1",
    stock: 100,
  },
  {
    id: "2",
    name: "Product 2",
    description: "Description for product 2",
    price: 20.99,
    image: "https://via.placeholder.com/150",
    categoryId: "2",
    stock: 50,
  },
  {
    id: "3",
    name: "Product 3",
    description: "Description for product 3",
    price: 30.99,
    image: "https://via.placeholder.com/150",
    categoryId: "3",
    stock: 0,
  },
  {
    id: "4",
    name: "Product 4",
    description: "Description for product 4",
    price: 40.99,
    image: "https://via.placeholder.com/150",
    categoryId: "4",
    stock: 200,
  },
  {
    id: "5",
    name: "Product 5",
    description: "Description for product 5",
    price: 50.99,
    image: "https://via.placeholder.com/150",
    categoryId: "5",
    stock: 150,
  },
];

const categories = [
  {
    id: "1",
    name: "Category 1",
    description: "Description for category 1",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "2",
    name: "Category 2",
    description: "Description for category 2",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "3",
    name: "Category 3",
    description: "Description for category 3",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "4",
    name: "Category 4",
    description: "Description for category 4",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "5",
    name: "Category 5",
    description: "Description for category 5",
    image: "https://via.placeholder.com/150",
  },
];

export const db = {
  products,
  categories,
};
