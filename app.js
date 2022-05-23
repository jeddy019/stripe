const express = require("express");
const path = require("path");
const predictRouter = require("./routes/predict");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => res.send("Welcome"));

app.use("/predict", predictRouter);
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "build", "index.html"))
);

const PORT = process.env.PORT || "5000";

app.all("*", (req, res) => res.status(404).send(`<h1>Page not found</h1>`));

app.listen(PORT, () => console.log(`server is listening on port ${5000}`));
