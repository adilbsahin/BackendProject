const express = require("express");
const app = express();

//routes

app.use("/products/:id/", function (req, res) {
    res.send("products details" + req.params.id);
});

app.use("/products", function (req, res) {
    res.send("urunler");
});

app.use("/", function (req, res) {
    res.send("anasayfa");
});

app.listen(3000, () => {
    console.log("listening on port 3000");
});