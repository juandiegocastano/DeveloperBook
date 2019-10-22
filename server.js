const express = require("express");
const connectDB = require("./config/db");

const app = express();

//Conectar DB
connectDB();

app.get("/", (req, res) => res.send("API Running"));

//Definir routes
app.use("/api/users", require("./config/routes/api/users"));
app.use("/api/profiles", require("./config/routes/api/profiles"));
app.use("/api/auth", require("./config/routes/api/auth"));
app.use("/api/posts", require("./config/routes/api/posts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
