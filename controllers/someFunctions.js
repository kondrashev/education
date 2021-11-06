const tkm = (item) => {
  return {
    test_31: item[2],
    test_32: item[3],
    test_33: item[4],
    test_34: item[5],
    test_41: item[6],
    test_43: item[7],
    test_51: item[8],
    test_53: item[9],
    test_56: item[10],
    test_57: item[11],
    test_65: item[12],
    test_66: item[13],
    test_67: item[14],
    test_68: item[15],
    test_72: item[16],
    test_73: item[17],
  };
};
const getRating = (item, teacher, exercise) => {
  return (
    Object.values(item.options)
      .filter((element) => element !== "-")
      .reduce((sum, element) => sum + parseInt(element), 0) +
    teacher +
    exercise
  );
};
const getExam = (rating) => {
  if (rating > 94) {
    return "Відмінно";
  } else if (rating < 95 && rating > 84) {
    return "Дуже добре";
  } else if (rating < 85 && rating > 74) {
    return "Добре";
  } else if (rating < 75 && rating > 64) {
    return "Задовільно";
  } else if (rating < 65 && rating > 59) {
    return "Достатньо";
  } else if (rating < 60) {
    return "Fx";
  }
};
const informationUpload = (data, discipline, group) => {
  let newData = data.map((item) => {
    return Object.values(item);
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
      a19 = "",
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
        a19,
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
      report: "",
      exam: "Н/З",
    };
  });
  return newData.filter((item) => item.group === group);
};
module.exports = {
  getRating,
  getExam,
  informationUpload,
};
