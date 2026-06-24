import { useEffect, useRef } from "react";

type Position = {
  x: number;
  y: number;
};

const FOLLOW_SPEED = 0.14;
const CURSOR_RING_FOLLOW_SPEED = 0.22;
const VISIBLE_OPACITY = "0.16";
const HIDDEN_OPACITY = "0";
const CURSOR_DOT_DEFAULT_SIZE = "0.4rem";
const CURSOR_DOT_HOVER_SIZE = "1rem";
const CURSOR_DOT_CLICK_SIZE = "1.6rem";
const INTERACTIVE_ELEMENT_SELECTOR = [
  "a",
  "button",
  "input",
  "select",
  "textarea",
  "summary",
  '[role="button"]',
  '[role="link"]',
  '[tabindex]:not([tabindex="-1"])',
  "[data-cursor-hover]",
].join(",");

const getViewportCenter = (): Position => ({
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
});

const getTransformValue = ({ x, y }: Position) =>
  `translate3d(${x}px, ${y}px, 0) translate3d(-50%, -50%, 0)`;

export default () => {
  const glowRef = useRef<HTMLDivElement | null>(null);
  const cursorRingRef = useRef<HTMLDivElement | null>(null);
  const cursorDotRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const targetPositionRef = useRef<Position>({ x: 0, y: 0 });
  const glowPositionRef = useRef<Position>({ x: 0, y: 0 });
  const cursorRingPositionRef = useRef<Position>({ x: 0, y: 0 });
  const isHoveringInteractiveElementRef = useRef(false);
  const isPointerDownRef = useRef(false);

  useEffect(() => {
    const shouldDisableMouseGlow = window.matchMedia(
      "(pointer: coarse), (max-width: 600px)",
    ).matches;

    if (shouldDisableMouseGlow) {
      document.documentElement.dataset.nativeCursor = "true";

      return () => {
        delete document.documentElement.dataset.nativeCursor;
      };
    }

    const glow = glowRef.current;
    const cursorRing = cursorRingRef.current;
    const cursorDot = cursorDotRef.current;

    if (!glow || !cursorRing || !cursorDot) {
      return;
    }

    const setCursorDotSize = () => {
      const dotSize = isPointerDownRef.current
        ? CURSOR_DOT_CLICK_SIZE
        : isHoveringInteractiveElementRef.current
          ? CURSOR_DOT_HOVER_SIZE
          : CURSOR_DOT_DEFAULT_SIZE;

      cursorDot.style.setProperty("--cursor-dot-size", dotSize);
    };

    const updateInteractiveElementHover = (target: EventTarget | null) => {
      isHoveringInteractiveElementRef.current =
        target instanceof Element &&
        Boolean(target.closest(INTERACTIVE_ELEMENT_SELECTOR));

      setCursorDotSize();
    };

    const updatePosition = () => {
      const glowDx = targetPositionRef.current.x - glowPositionRef.current.x;
      const glowDy = targetPositionRef.current.y - glowPositionRef.current.y;
      const cursorRingDx =
        targetPositionRef.current.x - cursorRingPositionRef.current.x;
      const cursorRingDy =
        targetPositionRef.current.y - cursorRingPositionRef.current.y;

      glowPositionRef.current.x += glowDx * FOLLOW_SPEED;
      glowPositionRef.current.y += glowDy * FOLLOW_SPEED;
      cursorRingPositionRef.current.x +=
        cursorRingDx * CURSOR_RING_FOLLOW_SPEED;
      cursorRingPositionRef.current.y +=
        cursorRingDy * CURSOR_RING_FOLLOW_SPEED;

      glow.style.transform = getTransformValue(glowPositionRef.current);
      cursorRing.style.transform = getTransformValue(
        cursorRingPositionRef.current,
      );
      cursorDot.style.transform = getTransformValue(targetPositionRef.current);

      animationFrameRef.current = window.requestAnimationFrame(updatePosition);
    };

    const handlePointerMove = (event: PointerEvent) => {
      targetPositionRef.current = {
        x: event.clientX,
        y: event.clientY,
      };

      updateInteractiveElementHover(event.target);
      glow.style.opacity = VISIBLE_OPACITY;
      cursorRing.style.opacity = "1";
      cursorDot.style.opacity = "1";
    };

    const handlePointerEnter = () => {
      delete document.documentElement.dataset.nativeCursor;
      glow.style.opacity = VISIBLE_OPACITY;
      cursorRing.style.opacity = "1";
      cursorDot.style.opacity = "1";
    };

    const handlePointerLeave = () => {
      isPointerDownRef.current = false;
      isHoveringInteractiveElementRef.current = false;
      setCursorDotSize();
      document.documentElement.dataset.nativeCursor = "true";
      glow.style.opacity = HIDDEN_OPACITY;
      cursorRing.style.opacity = HIDDEN_OPACITY;
      cursorDot.style.opacity = HIDDEN_OPACITY;
    };

    const handleWindowBlur = () => {
      document.documentElement.dataset.nativeCursor = "true";
    };

    const handleWindowFocus = () => {
      delete document.documentElement.dataset.nativeCursor;
    };

    const handlePointerDown = (event: PointerEvent) => {
      isPointerDownRef.current = true;
      updateInteractiveElementHover(event.target);
      setCursorDotSize();
    };

    const handlePointerUp = (event: PointerEvent) => {
      isPointerDownRef.current = false;
      updateInteractiveElementHover(event.target);
      setCursorDotSize();
    };

    const viewportCenter = getViewportCenter();

    targetPositionRef.current = viewportCenter;
    glowPositionRef.current = viewportCenter;
    cursorRingPositionRef.current = viewportCenter;
    glow.style.opacity = VISIBLE_OPACITY;
    glow.style.transform = getTransformValue(viewportCenter);
    cursorRing.style.opacity = "1";
    cursorRing.style.transform = getTransformValue(viewportCenter);
    cursorDot.style.opacity = "1";
    cursorDot.style.transform = getTransformValue(viewportCenter);
    setCursorDotSize();
    animationFrameRef.current = window.requestAnimationFrame(updatePosition);

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    window.addEventListener("pointerenter", handlePointerEnter, {
      passive: true,
    });
    window.addEventListener("pointerleave", handlePointerLeave, {
      passive: true,
    });
    window.addEventListener("pointerdown", handlePointerDown, {
      passive: true,
    });
    window.addEventListener("pointerup", handlePointerUp, {
      passive: true,
    });
    window.addEventListener("pointercancel", handlePointerUp, {
      passive: true,
    });
    window.addEventListener("blur", handleWindowBlur);
    window.addEventListener("focus", handleWindowFocus);

    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }

      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerenter", handlePointerEnter);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
      window.removeEventListener("blur", handleWindowBlur);
      window.removeEventListener("focus", handleWindowFocus);
      delete document.documentElement.dataset.nativeCursor;
    };
  }, []);

  return { glowRef, cursorRingRef, cursorDotRef };
};
