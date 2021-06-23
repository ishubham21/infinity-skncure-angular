export const dateFormatter = () => {
  let d = new Date();
  if (d.getMonth() == 0) {
    return `${d.getDate()} Jan`;
  } else if (d.getMonth() == 1) {
    return `${d.getDate()} Feb`;
  } else if (d.getMonth() == 2) {
    return `${d.getDate()} Mar`;
  } else if (d.getMonth() == 3) {
    return `${d.getDate()} Apr`;
  } else if (d.getMonth() == 4) {
    return `${d.getDate()} May`;
  } else if (d.getMonth() == 5) {
    return `${d.getDate()} June`;
  } else if (d.getMonth() == 6) {
    return `${d.getDate()} July`;
  } else if (d.getMonth() == 7) {
    return `${d.getDate()} Aug`;
  } else if (d.getMonth() == 8) {
    return `${d.getDate()} Sep`;
  } else if (d.getMonth() == 9) {
    return `${d.getDate()} Oct`;
  } else if (d.getMonth() == 10) {
    return `${d.getDate()} Nov`;
  } else {
    return `${d.getDate()} Dec`;
  }
};
