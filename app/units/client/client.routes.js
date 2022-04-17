const { Router } = require('express');
const clientRouter = Router();

// controllers
const { dashboard, add, active, detail, update } = require('./client.controller');

// routes
clientRouter.route('/').get(dashboard);
clientRouter.route('/add').get(add);
clientRouter.route('/active').get(active);
clientRouter.route('/:id').get(detail);
clientRouter.route('/:id/update').get(update);

module.exports = clientRouter;
