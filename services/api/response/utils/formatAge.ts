import formatDuration from 'date-fns/formatDuration';
import ru from 'date-fns/locale/ru';
import { createAgeDuration } from './createAgeDuration';

export const formatAge = ({ dateString }, { locale = ru } = {}) => {
  const duration = createAgeDuration({ dateString });

  return formatDuration(duration, {
    format: ['years'],
    locale,
  });
};
