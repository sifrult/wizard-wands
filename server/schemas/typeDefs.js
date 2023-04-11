const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Wand {
    wandType: String
    woodType: String
    url: String
}

type Query {
    wands: [Wand]
}

`;

module.exports = typeDefs