"use client";

import { useEffect, useRef } from "react";

type Position = {
  x: number;
  y: number;
};

const FOLLOW_SPEED = 0.14;
const CURSOR_RING_FOLLOW_SPEED = 0.22;
const VISIBLE_OPACITY = "0.16";
const HIDDEN_OPACITY = "0";

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

  useEffect(() => {
    const glow = glowRef.current;
    const cursorRing = cursorRingRef.current;
    const cursorDot = cursorDotRef.current;

    if (!glow || !cursorRing || !cursorDot) {
      return;
    }

    const updatePosition = () => {
      const glowDx = targetPositionRef.current.x - glowPositionRef.current.x;
      const glowDy = targetPositionRef.current.y - glowPositionRef.current.y;
      const cursorRingDx =
        targetPositionRef.current.x - cursorRingPositionRef.current.x;
      const cursorRingDy =
        targetPositionRef.current.y - cursorRingPositionRef.current.y;

      glowPositionRef.current.x += glowDx * FOLLOW_SPEED;
      glowPositionRef.current.y += glowDy * FOLLOW_SPEED;
      cursorRingPositionRef.current.x += cursorRingDx * CURSOR_RING_FOLLOW_SPEED;
      cursorRingPositionRef.current.y += cursorRingDy * CURSOR_RING_FOLLOW_SPEED;

      glow.style.transform = getTransformValue(glowPositionRef.current);
      cursorRing.style.transform = getTransformValue(cursorRingPositionRef.current);
      cursorDot.style.transform = getTransformValue(targetPositionRef.current);

      animationFrameRef.current = window.requestAnimationFrame(updatePosition);
    };

    const handlePointerMove = (event: PointerEvent) => {
      targetPositionRef.current = {
        x: event.clientX,
        y: event.clientY,
      };

      glow.style.opacity = VISIBLE_OPACITY;
      cursorRing.style.opacity = "1";
      cursorDot.style.opacity = "1";
    };

    const handlePointerEnter = () => {
      glow.style.opacity = VISIBLE_OPACITY;
      cursorRing.style.opacity = "1";
      cursorDot.style.opacity = "1";
    };

    const handlePointerLeave = () => {
      glow.style.opacity = HIDDEN_OPACITY;
      cursorRing.style.opacity = HIDDEN_OPACITY;
      cursorDot.style.opacity = HIDDEN_OPACITY;
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

    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }

      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerenter", handlePointerEnter);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return { glowRef, cursorRingRef, cursorDotRef };
};
