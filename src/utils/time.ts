type DateType = string | number | Date;
const fillDate = (d: number) => {
  return d < 10 ? `0${d}` : `${d}`;
};
export const formatTime = (date: DateType, formatter = 'YYYY-MM-DD') => {
  let d: Date;
  if (typeof date === 'number' && String(date).length === 10) {
    d = new Date(date * 1000);
  } else {
    d = new Date(date);
  }

  if (String(d) === 'Invalid Date') {
    throw new Error(String(d));
  }

  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDate();

  return formatter
    ?.replace('YYYY', String(year))
    .replace('MM', fillDate(month))
    .replace('DD', fillDate(day));
};
