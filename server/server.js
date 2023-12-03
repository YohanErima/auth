require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/userRoutes");
const app = express();

require("./db/db");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", userRouter);

const port = 3000;

app.listen(3000, () => {
  console.log(`Serveur sur le port ${port}`);
});
