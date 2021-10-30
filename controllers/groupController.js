const { Group } = require("../models/models");
const ApiError = require("../error/ApiError");
var csv = require("csvtojson");

class GroupController {
  async addGroup(req, res, next) {
    try {
      const { name } = req.body;
      const group = await Group.create({ name });
      return res.json(group);
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
  async deleteGroups(req, res) {
    const { listId } = req.body;
    JSON.parse(listId).map(async (id) => {
      await Group.destroy({ where: { id } });
    });
    return res.json();
  }
  async uploadInformation(req, res, next) {
    return res.json(await csv().fromFile("static/csv/data.csv"));
  }
}
module.exports = new GroupController();
