const { type } = require("@testing-library/user-event/dist/type");
const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Query{ 
        sayHi: String; 
        message: [Message!]
    }
    type Mutation { 
        postMessage(user:String!, content:String): ID! 
    }
    type Message {
        id: ID! 
        user: String!
        content: String! 
    }
`;

module.exports = { typeDefs };
