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

  let slidesPerView;
  if (window.innerWidth < 768) {
    slidesPerView = 1;
  } else slidesPerView = 3;

  const spaceBetween = 60 * (window.innerWidth / 1920);
  const swiper = new Swiper(".master__swiper", {
    slidesPerView: slidesPerView,
    spaceBetween: spaceBetween,
    loop: true,
    navigation: {
      nextEl: ".master__swiper-button-next",
      prevEl: ".master__swiper-button-prev",
    },
  });

  let tl = gsap.timeline({});
  gsap.from(".master__title", {
    yPercent: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".master",
      start: "center bottom",
      end: "center center",
      scrub: true,
    },
  });
  gsap.set([".master__block", ".master__swiper-button", ".master__swiper-slide-img"], {
    yPercent: 50,
    opacity: 0,
  });
  gsap.from([".master__block", ".master__swiper-button"], {
    scrollTrigger: {
      trigger: ".master",
      start: "40% center",
      end: "center top",
      scrub: true,
      onEnter: () => {
        tl.to([".master__block", ".master__swiper-button"], {
          yPercent: 0,
          opacity: 1,
        });
        tl.to(".master__swiper-slide-img", { yPercent: 0, opacity: 1 });
      },
      onLeaveBack: () => {
        tl.to([".master__block", ".master__swiper-button"], {
          yPercent: 50,
          opacity: 0,
        });
        tl.to(".master__swiper-slide-img", { yPercent: 50, opacity: 0 });
      },
    },
  });
  // tl.from([".master__block", ".master__swiper-button"], { yPercent: 50, opacity: 0 });
  // tl.from(".master__swiper-slide-img", { yPercent: 50, opacity: 0 });
}
