const express = require("express");
const massive = require("massive");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const app = express();

// const config = require("./backend/config.js");


// massive({
//   host: "localhost",
//   port: 4000,
//   database: "assessbox",
//   user: "postgres",
//   password: "Larios953"
// }).then( db => {
//   app.set('db', db);
// })

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors(corsOptions));
// app.use(session({ resave: true,
//                   saveUninitialized: true,
//                   secret: config.sessionSecret
//                 }));

let port = 3006;

app.listen(port, () => {
  console.log("Listening on port: " + port);
})
