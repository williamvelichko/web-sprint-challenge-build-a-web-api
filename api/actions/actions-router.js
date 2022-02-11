// Write your "actions" router here!
const express = require("express");
const actions = require("./actions-model");
const router = express.Router();
const project = require("../projects/projects-middleware");

const { validateId, validateAction } = require("./actions-middlware");

router.get("/", (req, res) => {
  actions
    .get()
    .then((actions) => {
      res.json(actions);
    })
    .catch((err) => {
      res.json(err);
    });
});
router.get("/:id", validateId, (req, res) => {
  res.status(200).json(req.action);
});
router.post("/", validateAction, (req, res) => {
  const action = req.body;
  actions
    .insert(action)
    .then((newAction) => {
      res.json(newAction);
    })
    .catch((err) => {
      res.json(err);
    });
});
router.put("/:id", (req, res) => {});
router.delete("/:id", (req, res) => {});

module.exports = router;
