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
const getRating = (item, teacher, exercise, conspectus) => {
  return (
    Object.values(item.options)
      .filter((element) => element !== "н")
      .reduce((sum, element) => sum + parseInt(element), 0) +
    teacher +
    exercise +
    conspectus
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
      surName,
      ,
      ,
      groupName,
      ,
      ,
      test_31 = "",
      test_32 = "",
      test_33 = "",
      test_34 = "",
      test_41 = "",
      test_43 = "",
      test_51 = "",
      test_53 = "",
      test_56 = "",
      test_57 = "",
      test_65 = "",
      test_66 = "",
      test_67 = "",
      test_68 = "",
      test_72 = "",
      test_73 = "",
    ]) => {
      return [
        surName,
        groupName,
        test_31 === "-" ? "н" : test_31,
        test_32 === "-" ? "н" : test_32,
        test_33 === "-" ? "н" : test_33,
        test_34 === "-" ? "н" : test_34,
        test_41 === "-" ? "н" : test_41,
        test_43 === "-" ? "н" : test_43,
        test_51 === "-" ? "н" : test_51,
        test_53 === "-" ? "н" : test_53,
        test_56 === "-" ? "н" : test_56,
        test_57 === "-" ? "н" : test_57,
        test_65 === "-" ? "н" : test_65,
        test_66 === "-" ? "н" : test_66,
        test_67 === "-" ? "н" : test_67,
        test_68 === "-" ? "н" : test_68,
        test_72 === "-" ? "н" : test_72,
        test_73 === "-" ? "н" : test_73,
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
      conspectus: "",
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
