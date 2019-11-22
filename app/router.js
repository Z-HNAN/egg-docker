'use strict';

const userRouter = require('./routers/user');

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  userRouter(app);
};
