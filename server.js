const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const mongoose = require('mongoose');
const passport = require("passport");

const users = require("./routes/api/users");
const questionsRouter = require("./routes/api/questions");


// require('dotenv').config();

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;

mongoose
  .connect(
    db,
    { useNewUrlParser: true, useUnifiedTopology: true}
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// const port = process.env.PORT || 3000;

app.use(passport.initialize());
require("./config/passport")(passport);

app.use("/users", users);
app.use('/questions', questionsRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port}`));

// app.use(cors());
// app.use(express.json());

// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true});
// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log("MongoDB database connection established successfully");
// })

// const questionsRouter = require('./routes/questions');
// const usersRouter = require('./routes/users');

// app.use('/questions', questionsRouter);
// app.use('/users', usersRouter);

// app.listen(port, () => {
//   console.log(`Server is running on port: ${port}`);
// });