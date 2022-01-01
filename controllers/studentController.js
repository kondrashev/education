// @ts-nocheck
const { Student, Dates } = require("../models/models");
const ApiError = require("../error/ApiError");
class StudentController {
  async addStudent(req, res, next) {
    try {
      const { surName, groupId } = req.body;
      const getStudent = await Student.findOne({ where: { surName } });
      if (!getStudent) {
        const student = await Student.create({ surName, groupId });
        return res.json(student);
      } else {
        return res.json("This student already exists!!!");
      }
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async updateStudent(req, res, next) {
    try {
      const { id, surName } = req.body;
      const student = await Student.update({ surName }, { where: { id } });
      return res.json(student);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getStudents(req, res) {
    const { groupId } = req.query;
    const students = await Student.findAll({ where: { groupId } });
    return res.json(students);
  }
  deleteStudents(req, res) {
    const { listId } = req.body;
    listId.forEach(async (id) => {
      await Student.destroy({ where: { id } });
      return res.json(listId);
    });
  }
  async addListDates(req, res, next) {
    try {
      const { listDates, groupId } = req.body;
      const getDates = await Dates.findOne({
        where: {
          groupId,
        },
      });
      let datesList = JSON.parse(getDates?.get("listDates"));
      datesList = datesList.sort((a, b) => (a[0] > b[0] ? 1 : -1));
      datesList.forEach((item, index) => {
        const [_, newDate] = listDates[index];
        if (newDate) item[1] = newDate;
      });
      const sortDates = JSON.stringify(
        datesList.sort((a, b) => (a[1] > b[1] ? 1 : -1))
      );
      const newListDates = !getDates
        ? await Dates.create({ listDates: sortDates, groupId })
        : await Dates.update(
            { listDates: sortDates, groupId },
            { where: { groupId } }
          );
      return res.json(newListDates);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getListDates(req, res) {
    const { groupId } = req.query;
    const listDates = await Dates.findOne({ where: { groupId } });
    return res.json(listDates);
  }
}
module.exports = new StudentController();
