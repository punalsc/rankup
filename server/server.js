const express = require("express");
const graphqlHTTP = require("express-graphql");
const cors = require("cors");
const { buildSchema } = require("graphql");
const axios = require("axios");
// const schema = require("./schema");

// GraphQL Schema
const schema = buildSchema(`
    type Query {
        character(name: String!): Character,
        image(name:String!): [Image]
    }

    type Character {
      description: String
    }

    type Image {
      url: String
    }
`);

const fetchDescription = async (args) => {
  try {
    const res = await axios.get(
      `https://gateway.marvel.com:443/v1/public/characters?name=${args.name}&limit=100&ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b`
    );

    console.log(res.data.data.results[0]);
    return res.data.data.results[0];
  } catch {
    (err) => err;
  }
};

const fetchImage = async (args) => {
  try {
    const res = await axios.get(
      `https://superheroapi.com/api/10158405947604808/search/${args.name}`
    );

    const { results } = await res.data;

    return results.forEach((obj) => {
      if (obj.biography.publisher === "Marvel Comics") {
        console.log(obj.image);
        return obj.image;
      }
    });
  } catch {
    (err) => err;
  }
};

// Root resolver
const rootValue = {
  character: fetchDescription,
  image: fetchImage,
};

const app = express();

// Allow cross-origin
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
  })
);

app.use(express.static("public"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.info(`🚀 Server started on port ${PORT}`));
