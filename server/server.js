const express = require("express");
const graphqlHTTP = require("express-graphql");
const cors = require("cors");
const { buildSchema } = require("graphql");
const axios = require("axios");
// const schema = require("./schema");

// GraphQL Schema
const schema = buildSchema(`
    type Query {
        character(name: String!): Character
    }

    type Character {
      description: String
    }
`);

const fetchDescription = async (args) => {
  try {
    const res = await axios.get(
      `https://gateway.marvel.com:443/v1/public/characters?name=${args.name}&limit=100&ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b`
    );

    return res.data.data.results[0];
  } catch {
    (err) => err;
  }
};

// const fetchRelatives = async (args) => {
//   try {
//     const res = await axios.get(
//       `https://superheroapi.com/api/10158405947604808/search/${args.name}`
//     );
//     return res.data.results.forEach((publisher) => {
//       if (publisher.biography.publisher === "Marvel Comics") {
//         res.results.forEach((found) => {
//           if (found.name.toLowerCase() === name.toLowerCase()) {
//             return found.biography["first-appearance"];
//           }
//         });
//       }
//     });
//   } catch {}
// };

// Root resolver
const root = {
  character: fetchDescription,
};

const app = express();

// Allow cross-origin
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.use(express.static("public"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.info(`🚀 Server started on port ${PORT}`));
