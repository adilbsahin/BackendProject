const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static('public'));

const data = [
    { id: 1, name: "bmw", price: 10000, ishere: true, imageUrl: "3.jpeg" },
    { id: 2, name: "mercedes", price: 20000, ishere: true, imageUrl: "1.jpeg" },
    { id: 3, name: "audi", price: 30000, ishere: true, imageUrl: "2.jpeg" }
]

//routes

app.use("/products/:id/", function (req, res) {
    const urun = data.find(u => u.id == req.params.id)
    res.render("product-details", urun);
});

app.use("/products", function (req, res) {
    res.render("products", {
        urunler: data
    });
});

app.use("/", function (req, res) {
    res.render("index");
});

app.listen(3000, () => {
    console.log("listening on port 3000");
});