// add middlewares here related to projects
const projects = require("./projects-model");

module.exports = {
  validateId,
  validateProject,
};

function validateId(req, res, next) {
  const { id } = req.params;

  projects.get(id).then((project) => {
    if (!project) {
      res.status(404).json({ message: `no project with ID: ${id} exists` });
    } else {
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
