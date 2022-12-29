export const scrollViewFunc = (cur) => {
  return document
    .getElementById(`${cur}`)
    ?.scrollIntoView({ behavior: "smooth" });
};
