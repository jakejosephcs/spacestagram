export const getCurrentDate = () => {
  return `${new Date().getFullYear()}-${
    (new Date().getMonth() < 10 ? "0" : "") + (new Date().getMonth() + 1)
  }-${new Date().getDate()}`;
};

export const isValidDate = (startDate, endDate) => {
  if (new Date(startDate) > new Date(endDate)) {
    return false;
  }
  return true;
};
