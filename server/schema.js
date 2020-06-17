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
    description: { type: CharacterType },
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
            res.data.data.results === null
              ? axios
                  .get(
                    `https://superheroapi.com/api/10158405947604808/search/${name}`
                  )
                  .then((res) =>
                    res.results.forEach((publisher) => {
                      if (publisher.biography.publisher === "Marvel Comics") {
                        res.results.forEach((found) => {
                          if (found.name.toLowerCase() === name.toLowerCase()) {
                            return found.biography["first-appearance"];
                          }
                        });
                      }
                    })
                  )
              : res.data.data.results[0]
          );
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
