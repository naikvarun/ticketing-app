import express from "express";

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Listening to Port 3000");
});
