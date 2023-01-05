export const isCorrectUrl = (url) => {
  if (!url.includes(".git")) {
    alert("올바른 깃허브 주소가 아닙니다.");
    return false;
  }
  if (!url.includes("github.")) {
    alert("올바른 깃허브 주소가 아닙니다.");
    return false;
  }
  return true;
};
