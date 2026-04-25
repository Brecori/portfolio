import { ScrollSmoother } from "gsap/ScrollSmoother";

const getNavbarHeight = () =>
  document.querySelector<HTMLElement>("[data-navbar]")?.offsetHeight ?? 0;

export const scrollToElement = (elementId: string) => {
  const target = document.getElementById(elementId);

  if (!target) {
    return;
  }

  const smoother = ScrollSmoother.get();
  const navbarHeight = getNavbarHeight();

  if (smoother) {
    smoother.scrollTo(target, true, `top ${navbarHeight}px`);
    return;
  }

  const targetTop =
    target.getBoundingClientRect().top + window.scrollY - navbarHeight;

  window.scrollTo({
    top: targetTop,
    behavior: "smooth",
  });
};
