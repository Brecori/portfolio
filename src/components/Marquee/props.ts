export type MarqueeDirection = "left" | "right";

export type MarqueeSpeed = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface MarqueeProps {
  direction?: MarqueeDirection;
  phrases: string[];
  speed?: MarqueeSpeed;
}
