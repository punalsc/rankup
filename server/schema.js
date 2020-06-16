const axios = require("axios");

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema,
} = require("graphql");

// Launch Type
const CharacterType = new GraphQLObjectType({
  name: "Character",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
  }),
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    character: {
      type: CharacterType,
      args: {
        name: { type: GraphQLString },
      },
      resolve(parentValue, args) {
        const { name } = args;
        return axios
          .get(
            `https://gateway.marvel.com:443/v1/public/characters?name=${name}&limit=100&ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b`
          )
          .then((res) =>
            res.data.data.results.count === 0
              ? "no data"
              : res.data.data.results[0]
          );
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
