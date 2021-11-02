const { Discipline, Group, Student } = require("../models/models");
const ApiError = require("../error/ApiError");
const csv = require("csvtojson");
const path = require("path");
const { tkm } = require("../controllers/someFunctions");

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
    try {
      const { csvFile } = req.files;
      const { discipline, group } = req.body;
      let fileName = "data.csv";
      csvFile.mv(path.resolve(__dirname, "..", "static/csv", fileName));
      let data = await csv().fromFile("static/csv/data.csv");
      let newData = [];
      data.forEach((item) => {
        newData.push(Object.values(item));
      });
      data = newData;
      newData = data.map((item) => {
        return item[0].split(";");
      });
      data = newData;
      newData = data.map(
        ([
          ,
          a1,
          ,
          ,
          a2,
          ,
          a3 = "",
          a4 = "",
          a5 = "",
          a6 = "",
          a7 = "",
          a8 = "",
          a9 = "",
          a10 = "",
          a11 = "",
          a12 = "",
          a13 = "",
          a14 = "",
          a15 = "",
          a16 = "",
          a17 = "",
          a18 = "",
          ...item
        ]) => {
          return [
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
          ];
        }
      );
      data = newData;
      const toChoose = (item) => {
        switch (discipline) {
          case "ТКМ":
            return tkm(item);
        }
      };
      newData = data.map((item = []) => {
        return {
          surName: item[0],
          group: item[1],
          options: toChoose(item),
          teacher: "",
          exercise: "",
          rating: "",
          exam: "Н/З",
        };
      });
      data = newData.filter((item) => item.group === group);
      const getDiscipline = await Discipline.findAll({
        where: {
          name: discipline,
        },
      });
      const getGroup = await Group.findAll({
        where: {
          name: group,
        },
      });
      if (!getDiscipline[0]?.name)
        await Discipline.create({ name: discipline });
      if (!getGroup[0]?.name) await Group.create({ name: group });
      const getRating = (item) => {
        console.log(
          Object.values(item.options)
            .filter((element) => element !== "-")
            .reduce((sum, element) => sum + parseInt(element), 0)
        );
      };
      data.forEach(async (item) => {
        let student = await Student.findAll({
          where: {
            surName: item.surName,
          },
        });
        if (!student[0]?.surName) {
          getRating(item);
          // await Student.create({
          //   surName: item.surName,
          //   options: JSON.stringify(item.options),
          //   teacher: 0,
          //   exercise: 0,
          //   rating: getRating(item),
          //   exam,
          // });
        } else {
          // await Student.update({});
        }
      });
      return res.json(data);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}
module.exports = new DisciplineController();
