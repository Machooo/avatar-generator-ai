const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { connectToMongo } = require('./config/db');
const { swagger_serve, swagger_settings} = require('./config/swagger');
const routes = require('./routes');
const cors = require('cors');
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const corsOptions = {
  credentials: true,
  origin : [
    'http://localhost:3000',
    'http://localhost:8000',
    'http://127.0.0.1:3000',
    'http://127.0.0.1:8000'
  ],
}
app.use(cors(corsOptions));

// Connection to mongo db
connectToMongo();

// register all routes
routes.forEach(({ path, router }) => {
  console.log(`Registering route: ${path} - ${router}`);
  app.use(path, router);
});

// swagger docs
app.use('/api/swagger', swagger_serve, swagger_settings);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404).send('Not found');
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
