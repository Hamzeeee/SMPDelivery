const express = require('express');
const cors = require("cors");
const app = express();

app.use(cors());
app.listen(8080);

console.log(`App listening on 8080`);

app.get('/api/player/:username', async (req, res) => {
    const { username } = req.params;
    const response = await fetch("https://api.mojang.com/users/profiles/minecraft/" + username);

    console.log(res.statusCode);

    res.json(await response.json());
})