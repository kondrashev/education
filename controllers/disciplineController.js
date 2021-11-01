const { Discipline } = require("../models/models");
const ApiError = require("../error/ApiError");
const csv = require("csvtojson");
const path = require("path");

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
    const { csvFile } = req.files;
    let fileName = "data.csv";
    csvFile.mv(path.resolve(__dirname, "..", "static/csv", fileName));
    let data = await csv().fromFile("static/csv/data.csv");
    let newData = [];
    data.forEach((item) => {
      newData.push(Object.values(item));
    });
    data = newData;
    newData = [];
    data.forEach((item) => {
      newData.push(item[0].split(";"));
    });
    data = newData;
    newData = [];
    data.forEach(
      ([
        ,
        a1,
        ,
        ,
        a2,
        ,
        a3,
        a4,
        a5,
        a6,
        a7,
        a8,
        a9,
        a10,
        a11,
        a12,
        a13,
        a14,
        a15,
        a16,
        a17,
        a18,
        ...item
      ]) => {
        newData.push([
          a1,
          a2,
          a3,
          a4,
          a5,
          a6,
          a7,
          a8,
          a9,
          a10,
          a11,
          a12,
          a13,
          a14,
          a15,
          a16,
          a17,
          a18,
        ]);
      }
    );
    return res.json(newData);
  }
}
module.exports = new DisciplineController();
