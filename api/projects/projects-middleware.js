// add middlewares here related to projects
const projects = require("./projects-model");

module.exports = {
  validateId,
  validateProject,
  validatesUpdate,
};

function validateId(req, res, next) {
  const { id } = req.params;

  projects.get(id).then((project) => {
    if (!project) {
      res.status(404).json({ message: `no project with ID: ${id} exists` });
    } else {
      req.project = project;
      next();
    }
  });
}

function validateProject(req, res, next) {
  const project = req.body;
  if (!project.name || !project.description) {
    res.status(400).json({ message: "needs a name or description" });
  } else {
    next();
  }
}

function validatesUpdate(req, res, next) {
  const project = req.body;
  if (!project.name || !project.description || !project.completed) {
    res
      .status(400)
      .json({ message: "needs a name or description or completition" });
  } else {
    next();
  }
}
