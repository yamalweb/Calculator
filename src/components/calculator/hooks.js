export const events = (n) => {
  const t = ['мероприятие', 'мероприятия', 'мероприятий'];
  const cases = [2, 0, 1, 1, 1, 2];
  return t[(n%100 > 4 && n%100 < 20) ? 2 : cases[(n%10 < 5) ? n%10 : 5]];
};
export const point = (n) => {
  const t = ['балл', 'балла', 'баллов'];
  const cases = [2, 0, 1, 1, 1, 2];
  return t[(n%100 > 4 && n%100 < 20) ? 2 : cases[(n%10 < 5) ? n%10 : 5]];
};