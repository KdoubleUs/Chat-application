const resolvers = {
  Query: {
    message: () => message,
  },
  postMessage: (parent, { user, content }) => {
    const id = messages.length;
    messages.push({ id, user, content });
    return id;
  },
};

module.exports = { resolvers };
