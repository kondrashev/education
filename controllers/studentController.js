const { Student } = require("../models/models");
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
    const students = await Student.findAll();
    return res.json(students);
  }
  deleteStudents(req, res) {
    const { listId } = req.body;
    JSON.parse(listId).map(async (id) => {
      await Student.destroy({ where: { id } });
    });
    return res.json();
  }
}
module.exports = new StudentController();
