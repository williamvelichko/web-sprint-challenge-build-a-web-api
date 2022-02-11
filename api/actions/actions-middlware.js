// add middlewares here related to actions
const actions = require("./actions-model");

module.exports = {
  validateId,
  validateAction,
};

function validateId(req, res, next) {
  const { id } = req.params;
  actions.get(id).then((action) => {
    if (!action) {
      res.status(404).json({ message: `no action with ID: ${id}` });
    } else {
      req.action = action;
      next();
    }
  });
}

function validateAction(req, res, next) {
  const { project_id, description, notes } = req.body;

  if (!description || !notes || !project_id) {
    res
      .status(400)
      .json({ message: "needs description, notes, or proper project_id" });
  } else {
    next();
  }
}
