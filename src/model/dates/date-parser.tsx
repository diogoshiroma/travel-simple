export const parseDate = (strDate: string): Date | null => {
  let parsedDate = null;
  if (matchShortDate(strDate)) {
    const day = strDate.substring(0, 2);
    const month = strDate.substring(3, 5);
    const year = strDate.substring(6, 10);
    parsedDate = new Date(year + '-' + month + '-' + day);
  }
  return parsedDate;
};

const matchShortDate = (strDate: string) => {
  const regexShortDate = /(\d{2})\/(\d{2})\/(\d{4})/; // por exemplo: 15/12/2020
  return regexShortDate.test(strDate);
};
