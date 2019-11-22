'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async findAll() {
    const { ctx, service } = this;

    ctx.body = await service.user.findAll();
  }

  async findOne() {
    const { ctx, service } = this;

    ctx.body = await service.user.findOne({ id: ctx.params.id });
  }

  async update() {
    const { ctx, service } = this;
    const user = ctx.request.body;

    // id为null即为新增，否则就是修改
    if (user.id === null) {
      await service.user.create({
        username: user.username || '',
        password: user.password || '',
      });
    } else {
      await service.user.update({
        id: user.id,
        username: user.username,
        password: user.password,
      });
    }

    ctx.body = 'SUCCESS';
  }

  async delete() {
    const { ctx, service } = this;

    const user = await service.user.findOne({ id: ctx.params.id });

    if (user) {
      await service.user.delete({ id: user.id });
      ctx.body = 'SUCCESS';
    }

    ctx.body = 'no user';
  }
}

module.exports = UserController;
