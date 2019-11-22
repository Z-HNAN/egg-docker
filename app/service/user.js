'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async findAll() {
    const users = await this.ctx.model.User.find();
    return users.map(user => ({
      id: user._id,
      username: user.username,
      password: user.password,
    }));
  }

  async findOne({ id }) {
    const user = await this.ctx.model.User.findById(id);
    return {
      id: user._id,
      username: user.username,
      password: user.password,
    };
  }

  async create(user) {
    const {
      username,
      password,
    } = user;

    return await this.ctx.model.User.create({ username, password });
  }

  async update(user) {
    const { id } = user;
    const oldUser = await this.ctx.model.User.findById(id);

    return await this.ctx.model.User.updateOne({ _id: id }, {
      ...oldUser.toObject(),
      ...user,
    });
  }

  async delete({ id }) {
    return await this.ctx.model.User.deleteOne({ _id: id });
  }
}

module.exports = UserService;
