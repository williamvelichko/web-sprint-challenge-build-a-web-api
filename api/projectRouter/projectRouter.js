const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("im the best");
});
router.get("/:id", (req, res) => {});
router.post("/", (req, res) => {});
router.put("/:id", (req, res) => {});
router.delete("/:id", (req, res) => {});
router.get("/:id/actions", (req, res) => {});

module.exports = router;
