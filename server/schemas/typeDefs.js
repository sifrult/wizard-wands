const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
}

type Product {
    _id: ID
    core: String
    flexibility: Float
    length: Int
    woodtype: String
    wandtype: String
}

type User {
    _id: ID
    username: String
    orders: [Order]
}

type Checkout {
    session: ID
}

type Auth {
    token: ID
    user: User
}

type Query {
    products(wandtype: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
}

type Mutation {
    addUser(username: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(username: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(username: String!, password: String!): Auth
}
`;

module.exports = typeDefs
