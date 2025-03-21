export function marque() {
  const marqueeInner = document.querySelectorAll(".marque__inner");
  const space = "&nbsp;&nbsp;&nbsp;";
  marqueeInner.forEach(el=>{
    const text = el.getAttribute("data-text");
    const textElement = document.createElement("p");
    textElement.classList.add("marque__text");
    let repeatCount = Math.ceil(window.innerWidth / 200) + 2;
    textElement.innerHTML = (text + space).repeat(repeatCount);
    el.appendChild(textElement);
    const clone = textElement.cloneNode(true);
    el.appendChild(clone);
  })
}
