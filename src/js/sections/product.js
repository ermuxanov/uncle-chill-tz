export function product() {
  const slide = document.querySelector('.product__swiper-slide')
  console.log(slide.offsetWidth);
  const spaceBetween = 80;
  // window.innerWidth - slide.offsetWidth * slidesPerView - spaceBetween * (slidesPerView - 1) = 0
  const slidesPerView = (window.innerWidth + spaceBetween) / (slide.offsetWidth + spaceBetween);
  console.log(slidesPerView);
  
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
}
