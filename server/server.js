const express = require("express");
const graphqlHTTP = require("express-graphql");
const cors = require("cors");
const schema = require("./schema");

const app = express();

// Allow cross-origin
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.use(express.static("public"));

app.use(express.json({ limit: "1mb" }));
app.post("/api", (request, response) => {
  const { body } = request;
  console.log(body);
  response.end();
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.info(`🚀 Server started on port ${PORT}`));
