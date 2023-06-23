const express = require('express');
const path = require('path');

const app = express();
const PORT = 4000;

app.use(express.static(path.resolve(__dirname, './public')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
});

app.get('/index.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
});

app.get("/login.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
});

app.get("/signup.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/signup.html"))
});

app.get("/productCart.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/productCart.html"))
});

app.get("/productDetail.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/productDetail.html"))
});

app.listen(PORT, () => console.log("Listening on http://localhost:" + PORT));