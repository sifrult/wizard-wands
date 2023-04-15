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
    woodType: String
    wandType: String
}

type User {
    _id: ID
    username: String
    orders: [Order]
}

type Auth {
    token: ID
    user: User
}

type Query {
    products(name: String): [Product]
    product(_id: ID!): Product
    users: User
    order(_id: ID!): Order
}

type Mutation {
    addUser(username: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    login(username: String!, password: String!): Auth
}
`;

module.exports = typeDefs