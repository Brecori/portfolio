import type { RefObject } from "react";

export type OrbitPoint = {
  setX: (value: number) => void;
  setY: (value: number) => void;
};

export type OrbitConfig = {
  angleRef: RefObject<number>;
  direction: 1 | -1;
  orbit: HTMLDivElement;
  points: OrbitPoint[];
  seconds: number;
};
