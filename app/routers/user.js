'use strict';

module.exports = app => {
  const { router, controller } = app;

  router.get('/users', controller.user.findAll);
  router.get('/users/:id', controller.user.findOne);
  router.post('/users', controller.user.update);
  router.delete('/users/:id', controller.user.delete);
};
