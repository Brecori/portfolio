import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const DEFAULT_SCROLL_DURATION = 1;

const getNavbarHeight = () =>
  document.querySelector<HTMLElement>("[data-navbar]")?.offsetHeight ?? 0;

export const scrollToElement = (
  elementId: string,
  duration = DEFAULT_SCROLL_DURATION,
) => {
  const target = document.getElementById(elementId);

  if (!target) {
    return;
  }

  const smoother = ScrollSmoother.get();
  const navbarHeight = getNavbarHeight();

  if (smoother) {
    gsap.to(smoother, {
      duration,
      scrollTop: Math.min(
        ScrollTrigger.maxScroll(window),
        smoother.offset(target, `top ${navbarHeight}px`),
      ),
    });
    return;
  }

  const targetTop =
    target.getBoundingClientRect().top + window.scrollY - navbarHeight;

  window.scrollTo({
    top: targetTop,
    behavior: "smooth",
  });
};
