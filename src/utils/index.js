import { v4 as uuidv4 } from "uuid";

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

export const augmentData = (data) => {
  return data.map((d) => {
    return {
      ...d,
      isLiked: false,
      id: uuidv4(),
    };
  });
};
