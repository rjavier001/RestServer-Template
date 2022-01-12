const { request, response } = require("express");

const usersGet = (req, res) => {
  const query = req.query;
  res.json({
    msg: "api get-controlador",
    query,
  });
};

const usersPost = (req, res) => {
  const { name, age } = req.body;
  res.json({
    msg: "api Post-controlador",
    name,
    age,
  });
};

const usersPut = (req, res) => {
  const { id } = req.params;
  res.json({
    msg: "api Put-controlador",
    id,
  });
};

const usersDelete = (req, res) => {
  res.json({
    msg: "api Delete-controlador",
  });
};

module.exports = {
  usersGet,
  usersPost,
  usersPut,
  usersDelete,
};
