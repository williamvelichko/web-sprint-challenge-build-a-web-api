// Write your "projects" router here!
const express = require("express");
const projects = require("./projects-model");
const { validateId, validateProject } = require("./projects-middleware");

const router = express.Router();

router.get("/", (req, res) => {
  projects
    .get()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
router.get("/:id", validateId, (req, res) => {
  const { id } = req.params;

  projects
    .get(id)
    .then((project) => {
      res.json(project);
    })
    .catch((err) => {
      res.json(err);
    });
});
router.post("/", validateProject, (req, res) => {
  const project = req.body;
  projects
    .insert(project)
    .then((newProject) => {
      res.status(200).json(newProject);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
router.put("/:id", (req, res) => {});
router.delete("/:id", (req, res) => {});
router.get("/:id/actions", (req, res) => {});

module.exports = router;
