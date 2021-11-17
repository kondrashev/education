const { Group } = require("../models/models");
const ApiError = require("../error/ApiError");
var csv = require("csvtojson");

class GroupController {
  async addGroup(req, res, next) {
    try {
      const { name, disciplineId } = req.body;
      const getGroup = await Group.findOne({ where: { name } });
      if (!getGroup) {
        const group = await Group.create({ name, disciplineId });
        return res.json(group);
      } else {
        return res.json("This group already exists!!!");
      }
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async updateGroup(req, res, next) {
    try {
      const { id, name } = req.body;
      const group = await Group.update({ name }, { where: { id } });
      return res.json(group);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getGroups(req, res) {
    const groups = await Group.findAll();
    return res.json(groups);
  }
  deleteGroups(req, res) {
    const { listId } = req.body;
    JSON.parse(listId).forEach(async (id) => {
      await Group.destroy({ where: { id } });
      return res.json(listId);
    });
  }
}
module.exports = new GroupController();
