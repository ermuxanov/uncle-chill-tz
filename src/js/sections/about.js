export function about() {
  gsap.to(".about", {
    scrollTrigger: {
      trigger: ".about",
      start: "top center",
      end: "center center",
      scrub: true,
      markers: true,
    },
  });
}
