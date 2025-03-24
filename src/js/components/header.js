export function header() {
  const header = document.querySelector(".header");
  const headerBtn = document.querySelector(".header__menu-burger");
  let flag = false;
  headerBtn.addEventListener("click", () => {
    if (!flag) {
      flag = true;
      header.classList.add("menu-show");
    } else {
      flag = false;
      header.classList.remove("menu-show");
    }
  });
}
