import ru from 'date-fns/locale/ru';

export const getMonths = (locale = ru) => {
  let months = 0;
  const list = [];

  do {
    const month = locale.localize.month(months);

    list.push({
      value: months + 1,
      name: month,
    });

    months++;
  } while (months < 12);

  return list;
};
