import { queryMatches } from "../components/utils.js";

export function intro() {
  // const Desktop = queryMatches(1330, "min")

  // if(Desktop) {

  // }

  const headerLogo = document.querySelector(".header__logo");
  let tl = gsap.timeline({
    defaults: {
      duration: 1.25,
    },
  });

  tl.from(".header__logo", {
    x: (window.innerWidth - headerLogo.offsetWidth) / 2 - headerLogo.offsetLeft,
    y: (window.innerHeight - headerLogo.offsetHeight) / 2 - headerLogo.offsetTop,
    scale: 1.2,
    duration: 2,
  })
    .to([".header__phone", ".header__mid"], { opacity: 1 })
    .from(".intro__left-britva", { x: 0, opacity: 0, duration: 1.2 }, "<")
    .from([".intro__left-heading", ".intro__left .text", ".intro__left .button"], {
      xPercent: -50,
      opacity: 0,
      stagger: 0.3,
    })
    .from(".intro__right-img", { opacity: 0, scale: 0 }, "<")
    .from(".intro__right-bg", { opacity: 0, scale: 1.1 }, "<")
    .from([".intro__right-sticker", ".intro__right-lenta"], { opacity: 0 }, "<");
}
