const palette = { 
  primaryColor: "#164738",
  primaryColorLight: "#346354",
  secondaryColor: "",
  violentBlue: "#002b63",
  lightGrey: "#4A4A4A",
  midnight_green: "#004953",
  forest_green : "#002b36"
}

export const groupBy = (items, key) => items.reduce(
  (result, item) => ({
    ...result,
    [item[key]]: [
      ...(result[item[key]] || []),
      item,
    ],
  }), 
  {},
);

export default palette;