import intervalToDuration from 'date-fns/intervalToDuration';
import parse from 'date-fns/parse';

export const createAgeDuration = ({
  dateString,
  formatString = 'yyyy-MM-dd',
}) => {
  try {
    const birthdayDate = parse(dateString, formatString, new Date());

    const duration = intervalToDuration({
      start: birthdayDate,
      end: new Date(),
    });

    return duration;
  } catch (error) {
    return undefined;
  }
};
