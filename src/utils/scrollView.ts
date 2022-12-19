export const scrollViewFunc = (cur: number) => {
  return document
    .getElementById(`${cur}`)
    ?.scrollIntoView({ behavior: "smooth" });
};
