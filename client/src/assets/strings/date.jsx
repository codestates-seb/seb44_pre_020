const date = new Date();

export const year = date.getFullYear();
const month = date.getMonth() + 1;
export const formattedMonth = month < 10 ? `0${month}` : month;
const day = date.getDate();
export const formattedDay = day < 10 ? `0${day}` : day;
