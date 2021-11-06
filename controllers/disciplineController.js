const { Discipline, Group, Student } = require("../models/models");
const ApiError = require("../error/ApiError");
const csv = require("csvtojson");
const path = require("path");
const {
  informationUpload,
  getRating,
  getExam,
} = require("../controllers/someFunctions");

class DisciplineController {
  async addDiscipline(req, res, next) {
    try {
      const { name } = req.body;
      const getDiscipline = await Discipline.findOne({ where: { name } });
      if (!getDiscipline) {
        const discipline = await Discipline.create({ name });
        return res.json(discipline);
      } else {
        return res.json("This discipline already exists!!!");
      }
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
    try {
      const { csvFile } = req.files;
      const { discipline, group } = req.body;
      let fileName = "data.csv";
      csvFile.mv(path.resolve(__dirname, "..", "static/csv", fileName));
      let data = await csv().fromFile("static/csv/data.csv");
      data = informationUpload(data, discipline, group);
      const getGroup = await Group.findOne({
        where: {
          name: group,
        },
      });
      data.forEach(async (item) => {
        await Student.create({
          surName: item.surName,
          groupId: getGroup.id,
          options: JSON.stringify(item.options),
          teacher: 0,
          exercise: 0,
          rating: getRating(item, 0, 0),
          report: "",
          exam: getExam(getRating(item, 0, 0)),
        });
      });
      return res.json(data);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async reloadInformation(req, res, next) {
    try {
      const { csvFile } = req.files;
      const { discipline, group } = req.body;
      let fileName = "data.csv";
      csvFile.mv(path.resolve(__dirname, "..", "static/csv", fileName));
      let data = await csv().fromFile("static/csv/data.csv");
      data = informationUpload(data, discipline, group);
      data.forEach(async (item) => {
        const student = await Student.findOne({
          where: {
            surName: item.surName,
          },
        });
        await Student.update(
          {
            surName: item.surName,
            options: JSON.stringify(item.options),
            teacher: student.teacher,
            exercise: student.exercise,
            rating: getRating(item, student.teacher, student.exercise),
            report: student.report,
            exam: getExam(getRating(item, student.teacher, student.exercise)),
          },
          { where: { id: student.id } }
        );
      });
      return res.json(data);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}
module.exports = new DisciplineController();
