const express = require('express');
const path = require('path');

const app = express();
const PORT = 4000;

app.use(express.static(path.resolve(__dirname, './public')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
});

app.listen(PORT, () => console.log("Listening on http://localhost:" + PORT));