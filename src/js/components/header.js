export function header() {
  const header = document.querySelector(".header");
  const headerBtn = document.querySelector(".header__menu-burger");
  let flag = false;
  headerBtn.addEventListener("click", () => {
    if (!flag) {
      flag = true;
      header.classList.add("menu-show");
      document.body.classList.add("no-scroll")
    } else {
      flag = false;
      header.classList.remove("menu-show");
      document.body.classList.remove("no-scroll")
    }
  });

  let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      document.querySelector("header").classList.add("hidden");
    } else {
      document.querySelector("header").classList.remove("hidden");
    }

    lastScrollTop = currentScroll;
  });

  gsap.to(".header", {
    scrollTrigger: {
      trigger: ".intro",
      start: "center top",
      end: "center bottom",
      scrub: true,
      onEnter: () => {
        gsap.to(".header", {
          background: "linear-gradient(-180deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%)",
        });
      },
      onLeaveBack: () => {
        gsap.to(".header", {
          background: "linear-gradient(-180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%)",
        });
      },
    },
  });
}
