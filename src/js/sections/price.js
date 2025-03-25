export function price() {
  gsap.set(".price__img.back img", { xPercent: -100, opacity: 0 });
  gsap.set(".price__wrap.back", { xPercent: 50, opacity: 0 });

  gsap.from(".price", {
    autoAlpha: 0,
    scrollTrigger: {
      trigger: ".price",
      start: "top center",
      end: "+=1 top",
      scrub: 1,
    },
  });
  gsap.to(".price", {
    scrollTrigger: {
      trigger: ".price",
      start: "50% center",
      end: "+=1 bottom",
      scrub: 1,
      onEnter: () => {
        gsap.to(".price__img.front img", { xPercent: -100, opacity: 0 });
        gsap.to(".price__img.back img", { xPercent: 0, opacity: 1 });

        gsap.to(".price__wrap.front", { xPercent: 50, opacity: 0 });
        gsap.to(".price__wrap.back", { xPercent: 0, opacity: 1 });
      },
      onLeaveBack: () => {
        gsap.to(".price__img.front img", { xPercent: 0, opacity: 1 });
        gsap.to(".price__img.back img", { xPercent: -100, opacity: 0 });

        gsap.to(".price__wrap.front", { xPercent: 0, opacity: 1 });
        gsap.to(".price__wrap.back", { xPercent: 50, opacity: 0 });
      },
    },
  });
}
