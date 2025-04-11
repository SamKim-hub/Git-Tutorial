var express = require("express");
var app = express();

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite",
});

const User = sequelize.define(
  "User",
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
  }
);

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true
// set the view engine to ejs
app.set("view engine", "ejs");

// use res.render to load up an ejs view file

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// index page
app.get("/", function (req, res) {
  res.render("index", { comments: comments });
});

// app.get("/create", function (req, res) {
//   console.log(req.query);

//   res.send("hi");
// });

app.post("/create", function (req, res) {
  console.log(req.body);
  const { content } = req.body;
  comments.push(content);
  console.log(comments);

  res.redirect("/");
});

// about page
// app.get('/about', function(req, res) {
//   res.render('about');
// });

app.listen(3000);
console.log("Server is listening on port 3000");
