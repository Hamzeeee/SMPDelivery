import express from "express"
import cors from "cors"

const app = express();

app.use(cors());
app.set("etag", false);
app.get("/api/player/:username", async (req, res) => {
    const {username} = req.params;
    const api = await fetch("https://api.mojang.com/users/profiles/minecraft/" + username);
    try {
        if (api.status !== 200) {
            res.sendStatus(404);
            return;
        }

        res.json(await api.json());
    } catch (e) {
        res.json("SERVER NOT REACHABLE!")
        res.sendStatus(503);
    }
});

app.listen(8080, () => {
    console.log("Listening to http://localhost:8080/")
});