const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connexion à la base réussi! ");
  })
  .catch((error) => console.log(error));
