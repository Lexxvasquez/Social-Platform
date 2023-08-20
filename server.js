const express = require('express');
const db = require('./config/connection');

const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes")(app);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`App listening on http://localhost:${PORT}`);
    })
});