export function product() {
  const slide = document.querySelector(".product__swiper-slide");
  let spaceBetween;
  // const spaceBetween = 80 * (window.innerWidth / 1920);
  if (window.innerWidth < 768) {
    spaceBetween = 80 * (window.innerWidth / 768);
  } else spaceBetween = 80 * (window.innerWidth / 1920);
  // window.innerWidth - slide.offsetWidth * slidesPerView - spaceBetween * (slidesPerView - 1) = 0
  const slidesPerView = (window.innerWidth + spaceBetween) / (slide.offsetWidth + spaceBetween);

  const swiper = new Swiper(".product__swiper", {
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
      trigger: ".product",
      start: "top bottom",
      end: "center center",
      scrub: true,
    },
  });
  tl.from([".product__title", ".product__text", ".product .button"], {
    yPercent: 100,
    opacity: 0,
  });
}
