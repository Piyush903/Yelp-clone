const sequelize = require("../database");
const resturant = require("../models/restaurants");
const rest_name = [
  "Bistro Bazaar",
  "Bistro Captain",
  "Bistroporium ",
  "Cuisine Street",
  "Cuisine Wave",
  "Deli Divine ",
  "Deli Feast ",
  "Eatery Hotspot",
  "Eateryworks",
  "Feast Lounge",
];
const location = [
  "Upper South Whemp",
  "Falt Point",
  "Pletbemp Bazaar",
  "Upper South Trutteel",
  "Sloseob Acre",
  "Lower North Driwan",
  "Fort Memuk",
  "Upper South Qattan",
  "West Floottircot Heights",
  "Healurnid Road",
];
sequelize
  .sync()
  .then((...a) => {
    return sequelize.authenticate();
  })
  .then(async (...a) => {
    const now = Date.now();
    for (let i = 0; i < 10; i++) {
      const resturantId = now + i;
      await resturant.create({
        id: Math.floor(1 + Math.random() * 1000),
        name: `${rest_name[i]}`,
        price_range: i,
        location: `${location[i]}`,
      });
    }
  })
  .catch(async (e) => {
    await sequelize.close();
    console.log(e);
  })
  .catch((e) => console.log(e));
