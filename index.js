const express = require("express");
const app = express();
var cors = require("cors");
const port = 5000;

app.use(cors());
app.use(express.json());

const users = [
  { id: "0", name: "sali", email: "dev@gmail.com" },
  { id: "1", name: "mali", email: "sof@gmail.com" },
  { id: "2", name: "kali", email: "deg@gmail.com" },
  { id: "3", name: "jali", email: "hrd@gmail.com" }
];

app.get("/", (req, res) => {
  res.send("Hello cc World  wow ok!");
});
app.get("/users", (req, res) => {
  res.send(users);
});
/* Use query parameter */
app.get("/users", (req, res) => {
  const search = req.query.search;
  if (search) {
    const searchResults = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchResults);
  } else {
    res.send(users);
  }
});


app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  res.send(newUser)
});




/* Dynamic api */
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.listen(port, () => {
  console.log("listening to port", port);
});
