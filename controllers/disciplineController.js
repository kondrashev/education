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
    const { group } = req.body;
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
    data = newData;
    newData = [];
    data.forEach(
      ([
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
        ...item
      ]) => {
        newData.push({
          surName: a1,
          group: a2,
          test_31: a3,
          test_32: a4,
          test_33: a5,
          test_34: a6,
          test_41: a7,
          test_43: a8,
          test_51: a9,
          test_53: a10,
          test_56: a11,
          test_57: a12,
          test_65: a13,
          test_66: a14,
          test_67: a15,
          test_68: a16,
          test_72: a17,
          test_73: a18,
          teacher: "",
          exercise: "",
          rating: "",
          exam: "Н/З",
        });
      }
    );
    data = newData.filter((item) => item.group === group);
    return res.json(data);
  }
}
module.exports = new DisciplineController();
