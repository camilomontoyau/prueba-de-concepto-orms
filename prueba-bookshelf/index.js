const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const User = require("./models/user.model");
const Task = require("./models/task.model");
const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, resp) => {
  resp.status(200).json({ mensaje: "ok" });
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.fetchAll();
    res.status(200).json(users);
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ error: err });
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await new User({ id }).fetch({ withRelated: ["task"] });
    res.status(200).json(user);
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ error: err });
  }
});

app.post("/users", async (req, res) => {
  try {
    const { body } = req;
    const newUser = await User.forge(body).save();
    res.status(201).json(newUser);
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ error: err });
  }
});

app.put("/users/:id", async (req, res) => {
  try {
    const { body } = req;
    const { id } = req.params;
    const user = new User({ id });
    await user.save(body);
    res.status(200).json(user);
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ error: err });
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await new User({ id }).destroy();
    res.status(200).json(user);
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ error: err });
  }
});

app.post("/tasks", async (req, res) => {
  try {
    const { body } = req;
    const newTask = await Task.forge(body).save();
    res.status(201).json(newTask);
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ error: err });
  }
});

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
