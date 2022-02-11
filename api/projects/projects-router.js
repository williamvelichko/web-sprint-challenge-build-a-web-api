// Write your "projects" router here!
const express = require("express");
const projects = require("./projects-model");
const {
  validateId,
  validateProject,
  validatesUpdate,
} = require("./projects-middleware");

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
router.put("/:id", validateId, validateProject, (req, res) => {
  const { id } = req.params;
  const project = req.body;

  projects
    .update(id, project)
    .then((updated) => {
      res.status(200).json(updated);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
router.delete("/:id", validateId, (req, res) => {
  const { id } = req.params;
  projects
    .remove(id)
    .then((deleted) => {
      res.status(200).json(req.project);
    })
    .catch((err) => {
      res.json(err);
    });
});
router.get("/:id/actions", validateId, (req, res) => {
  const { id } = req.params;
  projects
    .getProjectActions(id)
    .then((action) => {
      res.json(action);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
