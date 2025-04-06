export const typeDefs = `#graphql
type Product {
  id: ID!
  name: String!
  description: String!
  price: Float!
  image: String!
  category: String!
  stock: Int!
}
type Category {
  id: ID!
  name: String!
  description: String!
  image: String!
}
  type Query {
    products: [Product!]!
    product(productId: ID!): Product
    categories: [Category!]!
    category(categoryId: ID!): Category
  }
`;
