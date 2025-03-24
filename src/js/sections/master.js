export function master() {
  const slidesSvg = document.querySelectorAll(".master__swiper-slide svg");
  slidesSvg.forEach((svg, i) => {
    const paths = svg.querySelectorAll("path");
    paths.forEach((path) => {
      path.style.strokeDasharray = path.getTotalLength();
      path.style.strokeDashoffset = path.getTotalLength();
    });
    svg.addEventListener("mouseover", () => {
      paths.forEach((path) => {
        path.style.strokeDashoffset = 0;
      });
    });
    svg.addEventListener("mouseout", () => {
      paths.forEach((path) => {
        path.style.strokeDashoffset = path.getTotalLength();
      });
    });
  });

  const spaceBetween = 60 * (window.innerWidth / 1920);
  const swiper = new Swiper(".master__swiper", {
    slidesPerView: 3,
    spaceBetween: spaceBetween,
    loop: true,
    navigation: {
      nextEl: ".master__swiper-button-next",
      prevEl: ".master__swiper-button-prev",
    },
  });
}
