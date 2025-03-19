export function header() {
  const text = document.querySelector(".header__menu-text p");
  const repeat = Number(text.getAttribute("data-repeat"));
  const repeatedText = (text.innerText.trim() + " ").repeat(repeat);
  text.innerHTML = repeatedText
    .split("")
    .map((char, i, arr) => `<span style="transform:rotate(${(i * 360) / arr.length}deg)">${char}</span>`)
    .join("");
}
