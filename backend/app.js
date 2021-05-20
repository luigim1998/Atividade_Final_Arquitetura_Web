const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');
const routes = require("./routes/routes");

app.use(cors());
// app.use(express.static('public'));

mongoose.connect(
    "mongodb+srv://luigimuller:senhadolulu@cluster0.jmy2n.gcp.mongodb.net/trabalhoweb?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true
    }
).then(() => {
  console.log('Connected to database !!');
})
.catch((err)=>{
  console.log('Connection failed !!'+ err.message);
}); // trabalhoweb - nome do database

app.use(express.json());
app.use(routes);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});




const port = process.env.PORT || 3500;

app.listen(port);

console.log("Aberto na porta " + port);