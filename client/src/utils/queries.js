import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  {
    user {
      username
      orders {
        _id
        purchaseDate
        products {
          _id
          core
          flexibility
          length
          woodtype
          wandtype
        }
      }
    }
  }
`;