const express = require("express");
require("dotenv").config();
const sequelize = require("./database");
const resturant = require("./models/restaurants");
const { QueryTypes } = require("sequelize");
const cors = require("cors");
// const init = require("../server/utils/init");
// const Product = require("../server/models/product");
// const Resturant = require("../server/models/restaurants");
var { RedisStore, redisClient, session } = require("./database/redis");
const morgan = require("morgan");
const app = express();
const port = process.env.PORT || 3001;
// sequelize.sync({ force: true });
app.use(cors());
app.use(express.json());
app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: "nolie",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: false,
      maxAge: 1000 * 60 * 10,
    },
  })
);
app.get("/api/v1/resturants", async (req, res) => {
  try {
    const resturants = await sequelize.query("SELECT * FROM restaurants", {
      type: QueryTypes.SELECT,
    });
    console.log(resturants);
    res.json({
      status: "sucess",
      results: resturants.length,
      data: {
        resturant: resturants,
      },
    });
  } catch (err) {}
});
app.get("/api/v1/resturants/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const resturants = await sequelize.query(
      "SELECT * FROM restaurants WHERE id = ?",
      {
        replacements: [req.params.id],
        type: sequelize.QueryTypes.SELECT,
      }
    );
    res.status(200).json({
      status: "succes",
      data: {
        resturant: resturants,
      },
    });
  } catch (err) {}
});
app.post("/api/v1/resturants/", async (req, res) => {
  console.log(req.body);
  try {
    const resturants = await resturant.create({
      id: Math.floor(1 + Math.random() * 1000),
      name: req.body.name,
      price_range: req.body.price_range,
      location: req.body.location,
    });
    res.status(201).json({
      status: "succes",
      data: {
        resturant: resturants,
      },
    });
  } catch (err) {
    console.log(err);
  }
});
app.put("/api/v1/resturants/:id", async (req, res) => {
  console.log(req.param.id);
  console.log(req.body);
  try {
    const resturants = await resturant.update(
      {
        name: req.body.name,
        price_range: req.body.price_range,
        location: req.body.location,
      },
      { returning: true, where: { id: req.params.id } }
    );
    res.status(200).json({
      status: "succes",
      data: {
        resturant: resturants,
      },
    });
  } catch {}
});
app.delete("/api/v1/resturants/:id", async (req, res) => {
  try {
    const resturants = await resturant.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(204).json({
      status: "succes",
    });
  } catch (err) {}
});
app.listen(port, () => {
  console.log("server is up and listening");
});
