export  const capitalize = (name: String) => {
  const first = name[0];
  const rest = name.slice(1);
  return first.toUpperCase() + rest;
};