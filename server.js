const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(morgan("dev"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"));

// Database connection
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workout",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
  }
);

app.listen(PORT, function() {
  console.log(`Now listening on port: ${PORT}`);
});
