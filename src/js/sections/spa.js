export function spa() {
  gsap.set(".spa__left", {
    yPercent: 30,
    opacity: 0,
  });
  gsap.set(".spa__right", {
    scale: 0,
    opacity: 0,
  });
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".spa",
      start: "20% center",
      end: "center top",
      scrub: true,
      onEnter: () => {
        gsap.to(".spa__left", {
          yPercent: 0,
          opacity: 1,
        });
        gsap.to(".spa__right", {
          scale: 1,
          opacity: 1,
        });
      },
      onLeaveBack: () => {
        gsap.to(".spa__left", {
          yPercent: 30,
          opacity: 0,
        });
        gsap.to(".spa__right", {
          scale: 0,
          opacity: 0,
        });
      },
    },
  });
}
