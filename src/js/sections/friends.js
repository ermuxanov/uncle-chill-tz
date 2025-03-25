export function friends() {
  const slide = document.querySelector(".friends__swiper-slide");
  const spaceBetween = 60 * (window.innerWidth / 1920);
  // window.innerWidth - slide.offsetWidth * slidesPerView - spaceBetween * (slidesPerView - 1) = 0
  const slidesPerView = (window.innerWidth + spaceBetween) / (slide.offsetWidth + spaceBetween);

  const swiper = new Swiper(".friends__swiper", {
    slidesPerView: slidesPerView,
    spaceBetween: spaceBetween,
    loop: true,
    speed: 8000,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  });

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".friends",
      start: "top bottom",
      end: "center center",
      scrub: true,
    },
  });
  tl.from(".friends__title", {
    yPercent: 100,
    opacity: 0,
  });
}
