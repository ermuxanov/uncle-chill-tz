import Swiper from "swiper";
import { plugins } from "./components/plugins.js";
import { intro } from "./sections/intro.js";

window.addEventListener("onbeforeunload", function () {
    window.scrollTo(0, 0);
    gsap.to(window, { duration: 0, scrollTo: 0 });
});
window.addEventListener("unload", function () {
    window.scrollTo(0, 0);
    gsap.to(window, { duration: 0, scrollTo: 0 });
});


window.addEventListener("load", () => {
    plugins()
    Swiper.use([Navigation, Autoplay])

    intro()
})