import format from 'date-fns/format';
import parse from 'date-fns/parse';
import ru from 'date-fns/locale/ru';

export const formatBirthday = (dateString: string) => {
  try {
    const date = parse(dateString, 'yyyy-MM-dd', new Date());

    return format(date, 'dd MMMM yyyy г.', { locale: ru });
  } catch (error) {
    return '';
  }
};

export const formatBirthdayTwo = (dateString: string) => {
  try {
    const date = parse(dateString, 'yyyy-MM-dd', new Date());

    return format(date, 'dd.MM.yyyy', { locale: ru });
  } catch (error) {
    return '';
  }
};
