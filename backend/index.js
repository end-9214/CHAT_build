const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try{
    const r = await axios.put(
      'https://api.chatengine.io/users/',
      {username: username, secret: username, first_name: username, last_name: username},
      {headers: { "Private-Key": "e7a12977-2321-4a05-a3e5-51296d0cb349" }}
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }

  
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);