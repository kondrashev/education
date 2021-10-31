const { Discipline } = require("../models/models");
const ApiError = require("../error/ApiError");
var csv = require("csvtojson");

class DisciplineController {
  async addDiscipline(req, res, next) {
    try {
      const { name } = req.body;
      const discipline = await Discipline.create({ name });
      return res.json(discipline);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async updateDiscipline(req, res, next) {
    try {
      const { id, name } = req.body;
      const discipline = await Discipline.update({ name }, { where: { id } });
      return res.json(discipline);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getDisciplines(req, res) {
    const disciplines = await Discipline.findAll();
    return res.json(disciplines);
  }
  async deleteDisciplines(req, res) {
    const { listId } = req.body;
    JSON.parse(listId).map(async (id) => {
      await Discipline.destroy({ where: { id } });
    });
    return res.json();
  }
  async uploadInformation(req, res, next) {
    return res.json(await csv().fromFile("static/csv/data.csv"));
  }
}
module.exports = new DisciplineController();
