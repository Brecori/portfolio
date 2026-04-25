import { ReactNode } from "react";

export interface AnimatedContentProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  startPosition?: number;
  preventReAnimate?: boolean;
  isMobile?: boolean;
  onAnimationComplete?: () => void;
}
