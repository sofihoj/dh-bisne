const express = require('express');
const path = require('path');
const mainRoutes = require('./routes/mainRoutes');
const app = express();
require('dotenv').config();
const PORT = parseInt(process.env.PORT);

app.set("view engine", "ejs")
app.use(express.static(path.resolve(__dirname, './public')));

app.use('/', mainRoutes)

app.listen(PORT, () => console.log("Listening on http://localhost:" + PORT));