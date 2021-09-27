import getYear from 'date-fns/getYear';

export const getYears = (from = 2019) => {
  let year = getYear(new Date());
  const list = [];

  do {
    list.push({
      value: year,
      name: year,
    });

    year--;
  } while (year >= from);

  return list;
};
