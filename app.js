const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const CONFIG = require('./database/config/database');

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

require("./routes/customer.routes")(app);
require("./routes/driver.routes")(app);
require("./routes/product.routes")(app);
require("./routes/order.routes")(app);
require("./routes/orderitem.routes")(app);

const db = require("./database/models");

db.sequelize.sync();

// drop the table if it already exists
/* db.sequelize.sync({ force: true }).then(() => {
   console.log("Drop and re-sync db.");
}); */

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Online Shopping application." });
});

// if (CONFIG.app==='dev') {
//   //creates table if they do not already exist
//   //models.sequelize.sync();
//
//   //deletes all tables then recreates them useful for testing and development purposes
//   db.sequelize.sync({force: true});
// }

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
