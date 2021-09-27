import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import ru from 'date-fns/locale/ru';

export const formatDate = (dateString: string) => {
  try {
    const date = parseISO(dateString);

    return format(date, 'dd MMMM yyyy года', { locale: ru });
  } catch (error) {
    return '';
  }
};
