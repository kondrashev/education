export const headCells = () => {
  const tests = [
    {
      id: "test_31",
      numeric: true,
      disablePadding: false,
      label: `31_${new Date(
        "21.10.2021".split(".").reverse().join(".")
      ).toLocaleDateString("uk-UK")}`,
      date: new Date(
        "21.10.2021".split(".").reverse().join(".")
      ).toLocaleDateString("uk-UK"),
    },
    {
      id: "test_32",
      numeric: true,
      disablePadding: false,
      label: `32_${new Date(
        "11.10.2021".split(".").reverse().join(".")
      ).toLocaleDateString("uk-UK")}`,
      date: new Date(
        "11.10.2021".split(".").reverse().join(".")
      ).toLocaleDateString("uk-UK"),
    },
    {
      id: "test_33",
      numeric: true,
      disablePadding: false,
      label: `33_${new Date(
        "10.10.2021".split(".").reverse().join(".")
      ).toLocaleDateString("uk-UK")}`,
      date: new Date(
        "10.10.2021".split(".").reverse().join(".")
      ).toLocaleDateString("uk-UK"),
    },
    {
      id: "test_34",
      numeric: true,
      disablePadding: false,
      label: `34_${new Date(
        "20.10.2021".split(".").reverse().join(".")
      ).toLocaleDateString("uk-UK")}`,
      date: new Date(
        "20.10.2021".split(".").reverse().join(".")
      ).toLocaleDateString("uk-UK"),
    },
    {
      id: "test_41",
      numeric: true,
      disablePadding: false,
      label: `41_${new Date(
        "15.10.2021".split(".").reverse().join(".")
      ).toLocaleDateString("uk-UK")}`,
      date: new Date(
        "15.10.2021".split(".").reverse().join(".")
      ).toLocaleDateString("uk-UK"),
    },
    {
      id: "test_43",
      numeric: true,
      disablePadding: false,
      label: `43_${new Date(
        "18.10.2021".split(".").reverse().join(".")
      ).toLocaleDateString("uk-UK")}`,
      date: new Date(
        "18.10.2021".split(".").reverse().join(".")
      ).toLocaleDateString("uk-UK"),
    },
    {
      id: "test_51",
      numeric: true,
      disablePadding: false,
      label: `51_${new Date(
        "09.10.2021".split(".").reverse().join(".")
      ).toLocaleDateString("uk-UK")}`,
      date: new Date(
        "09.10.2021".split(".").reverse().join(".")
      ).toLocaleDateString("uk-UK"),
    },
    {
      id: "test_53",
      numeric: true,
      disablePadding: false,
      label: `53_${new Date(
        "16.10.2021".split(".").reverse().join(".")
      ).toLocaleDateString("uk-UK")}`,
      date: new Date(
        "16.10.2021".split(".").reverse().join(".")
      ).toLocaleDateString("uk-UK"),
    },
    {
      id: "test_56",
      numeric: true,
      disablePadding: false,
      label: `56_${new Date(
        "17.10.2021".split(".").reverse().join(".")
      ).toLocaleDateString("uk-UK")}`,
      date: new Date(
        "17.10.2021".split(".").reverse().join(".")
      ).toLocaleDateString("uk-UK"),
    },
    {
      id: "test_57",
      numeric: true,
      disablePadding: false,
      label: `57_${new Date(
        "02.10.2021".split(".").reverse().join(".")
      ).toLocaleDateString("uk-UK")}`,
      date: new Date(
        "02.10.2021".split(".").reverse().join(".")
      ).toLocaleDateString("uk-UK"),
    },
    {
      id: "test_65",
      numeric: true,
      disablePadding: false,
      label: `65_${new Date(
        "06.10.2021".split(".").reverse().join(".")
      ).toLocaleDateString("uk-UK")}`,
      date: new Date(
        "06.10.2021".split(".").reverse().join(".")
      ).toLocaleDateString("uk-UK"),
    },
    {
      id: "test_66",
      numeric: true,
      disablePadding: false,
      label: `66_${new Date(
        "08.10.2021".split(".").reverse().join(".")
      ).toLocaleDateString("uk-UK")}`,
      date: new Date(
        "08.10.2021".split(".").reverse().join(".")
      ).toLocaleDateString("uk-UK"),
    },
    {
      id: "test_67",
      numeric: true,
      disablePadding: false,
      label: `67_${new Date(
        "19.10.2021".split(".").reverse().join(".")
      ).toLocaleDateString("uk-UK")}`,
      date: new Date(
        "19.10.2021".split(".").reverse().join(".")
      ).toLocaleDateString("uk-UK"),
    },
    {
      id: "test_68",
      numeric: true,
      disablePadding: false,
      label: `68_${new Date(
        "12.10.2021".split(".").reverse().join(".")
      ).toLocaleDateString("uk-UK")}`,
      date: new Date(
        "12.10.2021".split(".").reverse().join(".")
      ).toLocaleDateString("uk-UK"),
    },
    {
      id: "test_72",
      numeric: true,
      disablePadding: false,
      label: `72_${new Date(
        "14.10.2021".split(".").reverse().join(".")
      ).toLocaleDateString("uk-UK")}`,
      date: new Date(
        "14.10.2021".split(".").reverse().join(".")
      ).toLocaleDateString("uk-UK"),
    },
    {
      id: "test_73",
      numeric: true,
      disablePadding: false,
      label: `73_${new Date(
        "03.10.2021".split(".").reverse().join(".")
      ).toLocaleDateString("uk-UK")}`,
      date: new Date(
        "03.10.2021".split(".").reverse().join(".")
      ).toLocaleDateString("uk-UK"),
    },
  ];
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
