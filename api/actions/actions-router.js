// Write your "actions" router here!
const express = require("express");
const actions = require("./actions-model");
const router = express.Router();

router.get("/", (req, res) => {
  actions
    .get()
    .then((actions) => {
      console.log(actions);
    })
    .catch((err) => {
      res.json(err);
    });
});
router.get("/:id", (req, res) => {});
router.post("/", (req, res) => {});
router.put("/:id", (req, res) => {});
router.delete("/:id", (req, res) => {});

module.exports = router;
