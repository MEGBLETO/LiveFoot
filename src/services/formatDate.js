export const formatDate = date => {
  let dateMonth =
    date.getMonth() < 8 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;

  let dateDay = date.getDate() < 9 ? `0${date.getDate()}` : date.getDate();

  return `${date.getFullYear()}-${dateMonth}-${dateDay}`;
};
