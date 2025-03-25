export function action() {
  gsap.set([".action__title", ".action__right"], {
    yPercent: 100,
    opacity: 0,
  });
  gsap.set([".action__left-svg img", ".action__left-circle"], {
    scale: 0,
  });
  gsap.set(".action__left-img", {
    clipPath: "inset(50% 0% 50% 0%)",
  });

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".action",
      start: "top 30%",
      end: "+=1 top",
      scrub: true,
      onEnter: () => {
        gsap.to([".action__title", ".action__right"], {
          yPercent: 0,
          opacity: 1,
        });
        gsap.to([".action__left-svg img", ".action__left-circle"], {
          scale: 1,
        });
        gsap.to(".action__left-img", {
          clipPath: "inset(0% 0%)",
          delay: 0.2,
        });
      },
      onLeaveBack: () => {
        gsap.to([".action__title", ".action__right"], {
          yPercent: 100,
          opacity: 0,
        });
        gsap.to([".action__left-svg img", ".action__left-circle"], {
          scale: 0,
        });
        gsap.to(".action__left-img", {
          clipPath: "inset(50% 0% 50% 0%)",
        });
      },
    },
  });
  // tl.from(".action__title", {
  //   yPercent: 100,
  //   opacity: 0,
  // });
}
