const express = require("express");
const Sequelize = require("sequelize");
const app = express();
const port = 3000;
const models = require("./models");
console.log("indexjs", { models });
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).send("funciona api");
});

app.post("/users", async (req, res) => {
  try {
    const { body } = req;
    const newUser = await models.user.create(body);
    return res.status(201).json(newUser);
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ error: err });
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await models.user.findAll({ include: [models.task] });
    return res.status(200).json(users);
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ error: err });
  }
});

app.put("/users/:id", async (req, res) => {
  try {
    const { body } = req;
    const { id } = req.params;
    let user = await models.user.findByPk(id);
    if (!user) {
      return res
        .status(404)
        .send({ error: `user con id = ${id} no encontrado` });
    }
    user.set(body);
    const saved = await user.save();
    console.log({ saved });
    return res.status(200).json(user);
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ error: err });
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await models.user.findByPk(id);
    if (!user) {
      return res
        .status(404)
        .send({ error: `user con id = ${id} no encontrado` });
    }
    return res.status(200).json(user);
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ error: err });
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await models.user.findByPk(id);
    if (!user) {
      return res
        .status(404)
        .send({ error: `user con id = ${id} no encontrado` });
    }
    await user.destroy();
    return res
      .status(200)
      .json({ message: `elemento con id = ${id} fue eliminado` });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ error: err });
  }
});

app.get("/tasks", async (req, res) => {
  try {
    const tasks = await models.task.findAll();
    return res.status(200).json(tasks);
  } catch (error) {
    console.log("err", err);
    res.status(500).json({ error: err });
  }
});

app.post("/tasks", async (req, res) => {
  try {
    const { body } = req;
    const newTask = await models.task.create(body);
    return res.status(201).json(newTask);
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ error: err });
  }
});

app.post("/customers", async (req, res) => {
  try {
    const { body } = req;
    const newC = await models.customer.create(body);
    return res.status(201).json(newC);
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ error: err });
  }
});

app.get("/customers", async (req, res) => {
  try {
    const cs = await models.customer.findAll();
    return res.status(200).json(cs);
  } catch (error) {
    console.log("err", err);
    res.status(500).json({ error: err });
  }
});

app.put("/customers/:id", async (req, res) => {
  try {
    const { body } = req;
    const { id } = req.params;
    let user = await models.customer.findByPk(id);
    if (!user) {
      return res
        .status(404)
        .send({ error: `costumer con id = ${id} no encontrado` });
    }
    user.set(body);
    const saved = await user.save();
    console.log({ saved });
    return res.status(200).json(user);
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ error: err });
  }
});

app.listen(port, () => {
  console.log(`API funciona en http://localhost:${port}`);
});
