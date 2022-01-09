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
      const { studentId, item, valueItem } = req.body;
      const getStudent = await Student.findOne({ where: { id: studentId } });
      let upadateStudent = await Student.update(
        { [item]: valueItem },
        { where: { id: studentId } }
      );
      return res.json(upadateStudent);
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
      const datesList = JSON.parse(getDates?.get("listDates") || "[]");
      listDates.forEach((item, index) => {
        const [test, date] = item || [["", ""]];
        if (date) {
          const box = [...(datesList[index] || [["", ""]])];
          box[0] = test;
          box[1] = date;
          datesList[index] = box;
        }
      });
      const sortDates = JSON.stringify(datesList);
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
