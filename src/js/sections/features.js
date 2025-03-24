export function features() {
  gsap.set(".features__wrap", {
    xPercent: 20,
    opacity: 0,
  });

  gsap.to(".features", {
    y: 0,
    scrollTrigger: {
      trigger: ".features",
      start: "top bottom",
      end: "+=1 center",
      scrub: 1,
    },
  });

  gsap.from(".features__title", {
    opacity: 0,
    yPercent: 300,
    scrollTrigger: {
      trigger: ".features",
      start: "30% bottom",
      end: "+=1 70%",
      scrub: 1,
    },
  });
  gsap.from(".features__wrap", {
    scrollTrigger: {
      trigger: ".features",
      start: "30% 75%",
      end: "+=1 center",
      scrub: 1,
      onEnter: () => {
        gsap.to(".features__wrap", { xPercent: 0, opacity: 1, stagger: 0.3 });
      },
      onLeaveBack: () => {
        gsap.to(".features__wrap", { xPercent: 20, opacity: 0, stagger: 0.3 });
      },
    },
  });
}
