const express = require("express");
const cors = require("cors");
const endpoints = require("./api/endpoints");
const all = require("./api/all");
const scrape = require("./api/scrapper");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  endpoints(req, res);
});

app.get("/v1/:category", (req, res) => {
  let category = req.params.category;

  if (category == "all") all(req, res);
  else scrape(req, res, category);
});

app.listen(process.env.PORT || 3000, () =>
  console.log(`Server started on port 3000`)
);
