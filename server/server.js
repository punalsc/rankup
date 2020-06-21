const express = require("express");
const graphqlHTTP = require("express-graphql");
const cors = require("cors");
const { buildSchema } = require("graphql");
const axios = require("axios");

// GraphQL Schema
const schema = buildSchema(`
    type Query {
        character(name: String!): Character,
        image(name:String!): Image,
        wikiDesc(name:String!): WikiDesc
    }

    type Character {
      description: String
    }

    type Image {
      url: String
    }

    type WikiDesc {
      extract: String
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

const fetchImage = async (args) => {
  try {
    const res = await axios.get(
      `https://superheroapi.com/api/10158405947604808/search/${args.name}`
    );

    const { results } = await res.data;

    const filteredResult = results.filter(
      (obj) => obj.biography.publisher === "Marvel Comics"
    );

    return filteredResult[0].image;
  } catch {
    (err) => err;
  }
};

fetchWikiDesc = async (args) => {
  try {
    const res = await axios.get(
      `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${args.name}_(Marvel_Comics_character)`
    );

    const data = await res.data.query.pages;
    filteredData = data[Object.keys(data)[0]];

    return filteredData;
  } catch {
    (err) => err;
  }
};

// Root resolver
const rootValue = {
  character: fetchDescription,
  image: fetchImage,
  wikiDesc: fetchWikiDesc,
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
