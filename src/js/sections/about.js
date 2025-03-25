export function about() {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about",
      start: "top 50%",
      end: "50% 50%",
      scrub: 2,
    },
  });
  tl.to(".about__bottom-img img", { rotate: 0 }).from(".about__inner", { yPercent: 30, autoAlpha: 0 }, "<");
}
