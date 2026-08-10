const DEFAULT_SCROLL_DURATION = 0.7;

const getNavbarHeight = () =>
  document.querySelector<HTMLElement>("[data-navbar]")?.offsetHeight ?? 0;

export const scrollToElement = async (
  elementId: string,
  duration = DEFAULT_SCROLL_DURATION,
) => {
  const target = document.getElementById(elementId);

  if (!target) {
    return;
  }

  const navbarHeight = getNavbarHeight();

  const shouldUseNativeScroll = window.matchMedia(
    "(pointer: coarse), (max-width: 600px)",
  ).matches;

  if (shouldUseNativeScroll) {
    const targetTop =
      target.getBoundingClientRect().top + window.scrollY - navbarHeight;

    window.scrollTo({ top: targetTop, behavior: "smooth" });
    return;
  }

  const [{ default: gsap }, { ScrollSmoother }, { ScrollTrigger }] =
    await Promise.all([
      import("gsap"),
      import("gsap/ScrollSmoother"),
      import("gsap/ScrollTrigger"),
    ]);

  gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
  const smoother = ScrollSmoother.get();

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

  const targetTop = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
  window.scrollTo({ top: targetTop, behavior: "smooth" });
};
