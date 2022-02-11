// add middlewares here related to actions
const actions = require("./actions-model");

module.exports = {
  validateId,
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
