// @ts-nocheck
export const headCells = (dates) => {
  const listDates = JSON.parse(dates?.listDates || "[]");
  const tests = listDates.map(([test, date]) => {
    return {
      id: `test_${test}`,
      numeric: true,
      disablePadding: false,
      label: `${test}_${date}`,
      date: new Date(date.split(".").reverse().join(".")).getTime(),
    };
  });
  return [
    {
      id: "surName",
      numeric: true,
      disablePadding: false,
      label: "Прізвище",
    },
    ...tests.sort((a, b) => (a.date > b.date ? 1 : -1)),
    {
      id: "report",
      numeric: true,
      disablePadding: false,
      label: "Звіт",
    },
    {
      id: "teacher",
      numeric: true,
      disablePadding: false,
      label: "Викладач",
    },
    {
      id: "conspectus",
      numeric: true,
      disablePadding: false,
      label: "Конспект",
    },
    {
      id: "exercise",
      numeric: true,
      disablePadding: false,
      label: "Завдання",
    },
    {
      id: "rating",
      numeric: true,
      disablePadding: false,
      label: "Рейтинг",
    },
    {
      id: "exam",
      numeric: true,
      disablePadding: false,
      label: "Екзамен",
    },
  ];
};
export function createData({
  id,
  surName,
  report,
  teacher,
  conspectus,
  exercise,
  rating,
  exam,
  options,
}) {
  const {
    test_31,
    test_32,
    test_33,
    test_34,
    test_41,
    test_43,
    test_51,
    test_53,
    test_56,
    test_57,
    test_65,
    test_66,
    test_67,
    test_68,
    test_72,
    test_73,
  } = JSON.parse(options);
  return {
    id,
    surName,
    test_31,
    test_32,
    test_33,
    test_34,
    test_41,
    test_43,
    test_51,
    test_53,
    test_56,
    test_57,
    test_65,
    test_66,
    test_67,
    test_68,
    test_72,
    test_73,
    report,
    teacher,
    conspectus,
    exercise,
    rating,
    exam,
  };
}
