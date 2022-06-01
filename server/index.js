const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./Schema/typeDefs");
const { resolvers } = require("./Schema/resolvers");
const express = require("express");

const startServer = async () => {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });
};
