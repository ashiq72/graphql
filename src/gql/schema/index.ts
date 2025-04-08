export const typeDefs = `#graphql
type Product {
  id: ID!
  name: String
  description: String
  price: Float
  image: String
  categoryId: String
  stock: Int
  category: Category
}
type Category {
  id: ID!
  name: String
  description: String
  image: String
  products: [Product]
}
  type Query {
    products: [Product]
    product(productId: ID!): Product
    categories: [Category]
    category(categoryId: ID!): Category
  }
`;
